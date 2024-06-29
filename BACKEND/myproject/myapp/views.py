from django.shortcuts import render
from django.http import JsonResponse
from .models import Product

# Create your views here.
from django.http import JsonResponse

def example_view(request):
    data = {
        "message": "Hello from Django!"
    }
    return JsonResponse(data)

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)