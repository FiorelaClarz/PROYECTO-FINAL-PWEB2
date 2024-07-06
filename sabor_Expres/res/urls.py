from django.urls import include, path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.home, name='home'),
    path('pago/', views.pago, name='pago'),
    path('order-confirmation/', views.order_confirmation, name='order_confirmation'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('clientes/', views.clientes, name='clientes'),
    path('productos/', views.productos, name='productos'),
    path('login/', views.login_view, name='login'),
    path('obtener-productos/', views.obtener_productos, name='obtener_productos'),
     path('carrito/', views.carrito, name='carrito'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
