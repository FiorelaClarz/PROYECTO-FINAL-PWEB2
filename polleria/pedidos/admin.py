from django.contrib import admin

# Register your models here.
from .models import Pollo,Papa,Bebida,Crema
admin.site.register(Pollo)
admin.site.register(Papa)
admin.site.register(Bebida)
admin.site.register(Crema)