from django.urls import path
from .views import example_view
from .views import product_list


urlpatterns = [
    path('api/example/', example_view, name='example'),
    path('api/products/', product_list, name='product-list'),
]

# urlpatterns = [
#     path('api/products/', product_list, name='product-list'),
# ]
