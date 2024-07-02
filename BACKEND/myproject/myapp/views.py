from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
import os
from django.conf import settings

# carrito
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Product, Cart, CartItem
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json

# Create your views here.
from django.http import JsonResponse

def example_view(request):
    data = {
        "message": "Hello from Django!"
    }
    return JsonResponse(data)

# def product_list(request):
#     products = list(Product.objects.values())
    # return JsonResponse(products, safe=False)
# def product_list(request):
#     products = list(Product.objects.values('id', 'name', 'description', 'price', 'discount_price', 'image'))
#     for product in products:
#         if product['image']:
#             product['image'] = request.build_absolute_uri(product['image'].url)
#     return JsonResponse(products, safe=False)
def product_list(request):
    products = list(Product.objects.values('id', 'name', 'description', 'price', 'discount_price', 'image'))
    for product in products:
        if product['image']:
            product['image'] = request.build_absolute_uri(os.path.join(settings.MEDIA_URL, product['image']))
    return JsonResponse(products, safe=False)
# def product_list(request):
#     products = list(Product.objects.values('id', 'name', 'description', 'price', 'discount_price', 'image'))
#     for product in products:
#         product['image'] = request.build_absolute_uri(product['image'])
#     return JsonResponse(products, safe=False)

# @csrf_exempt
# @require_http_methods(["POST"])
# def add_to_cart(request):
#     data = json.loads(request.body)
#     product_id = data['product_id']
#     quantity = data.get('quantity', 1)

#     cart, created = Cart.objects.get_or_create(id=request.session.get('cart_id'))
#     if created:
#         request.session['cart_id'] = cart.id

#     product = get_object_or_404(Product, id=product_id)
#     cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
#     if not created:
#         cart_item.quantity += quantity
#     cart_item.save()

#     return JsonResponse({'message': 'Product added to cart successfully'})

# @csrf_exempt
# @require_http_methods(["POST"])
# def remove_from_cart(request):
#     data = json.loads(request.body)
#     product_id = data['product_id']

#     cart = get_object_or_404(Cart, id=request.session.get('cart_id'))
#     product = get_object_or_404(Product, id=product_id)
#     cart_item = get_object_or_404(CartItem, cart=cart, product=product)
#     cart_item.delete()

#     return JsonResponse({'message': 'Product removed from cart successfully'})

# def get_cart(request):
#     cart = get_object_or_404(Cart, id=request.session.get('cart_id'))
#     items = cart.items.select_related('product').all()
#     items_data = [
#         {
#             'id': item.id,
#             'product_id': item.product.id,
#             'name': item.product.name,
#             'price': item.product.price,
#             'discount_price': item.product.discount_price,
#             'quantity': item.quantity
#         }
#         for item in items
#     ]
#     return JsonResponse({'items': items_data, 'total_price': sum(item.product.price * item.quantity for item in items)})

@csrf_exempt
@require_http_methods(["POST"])
def add_to_cart(request):
    data = json.loads(request.body)
    product_id = data['product_id']
    # product_id = data.get('id')
    quantity = data.get('quantity', 1)

    cart, created = Cart.objects.get_or_create(id=request.session.get('cart_id'))
    if created:
        request.session['cart_id'] = cart.id

    product = get_object_or_404(Product, id=product_id)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not created:
        cart_item.quantity += quantity
    cart_item.save()

    return JsonResponse({'message': 'Product added to cart successfully'})

@csrf_exempt
@require_http_methods(["POST"])
def remove_from_cart(request):
    data = json.loads(request.body)
    product_id = data['product_id']

    cart = get_object_or_404(Cart, id=request.session.get('cart_id'))
    product = get_object_or_404(Product, id=product_id)
    cart_item = get_object_or_404(CartItem, cart=cart, product=product)
    cart_item.delete()

    return JsonResponse({'message': 'Product removed from cart successfully'})

def get_cart(request):
    try:
        cart = Cart.objects.get(id=request.session.get('cart_id'))
    except Cart.DoesNotExist:
        return JsonResponse({'items': [], 'total_price': 0})

    items = cart.items.select_related('product').all()
    items_data = [
        {
            'id': item.id,
            'product_id': item.product.id,
            'name': item.product.name,
            'price': item.product.price,
            'discount_price': item.product.discount_price,
            'quantity': item.quantity
        }
        for item in items
    ]
    total_price = sum((item.product.discount_price if item.product.discount_price else item.product.price) * item.quantity for item in items)
    return JsonResponse({'items': items_data, 'total_price': total_price})