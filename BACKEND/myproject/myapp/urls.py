from django.urls import path
from .views import example_view
from .views import product_list

# carrito
from .views import add_to_cart, remove_from_cart, get_cart


urlpatterns = [
    path('api/example/', example_view, name='example'),
    path('api/products/', product_list, name='product-list'),

    # carrito
    path('api/cart/add/', add_to_cart, name='add-to-cart'),
    path('api/cart/remove/', remove_from_cart, name='remove-from-cart'),
    path('api/cart/', get_cart, name='get-cart'),
]

# urlpatterns = [
#     path('api/products/', product_list, name='product-list'),
# ]
