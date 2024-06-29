from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('crear_pollo/', views.crear_pollo, name='crear_pollo'),
    path('crear_bebida/', views.crear_bebida, name='crear_bebida'),
    path('crear_crema/', views.crear_crema, name='crear_crema'),
    path('crear_papa/', views.crear_papa, name='crear_papa'),
]