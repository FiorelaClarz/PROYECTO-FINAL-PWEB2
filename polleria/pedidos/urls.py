from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'pollos', views.PolloViewSet)
router.register(r'bebidas', views.BebidaViewSet)
router.register(r'papas', views.PapaViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('producto/<int:producto_id>/<str:producto_tipo>/', views.detalle_producto, name='detalle_producto'),
    path('hacer_pedido/', views.hacer_pedido, name='hacer_pedido'),
    path('crear_pollo/', views.crear_pollo, name='crear_pollo'),
    path('crear_bebida/', views.crear_bebida, name='crear_bebida'),
    path('crear_crema/', views.crear_crema, name='crear_crema'),
    path('crear_papa/', views.crear_papa, name='crear_papa'),
    path('api/', include(router.urls)),  # Añade esta línea para incluir las rutas de la API
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]