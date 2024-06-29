from django.db import models

# Create your models here.
class Papa(models.Model):
    codigo = models.AutoField(primary_key=True)
    porcion = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"Papa {self.porcion}"

class Pollo(models.Model):
    codigo = models.AutoField(primary_key=True)
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    parte = models.CharField(max_length=100)
    disponible = models.BooleanField(default=True)

    def __str__(self):
        return f"Pollo {self.cantidad} - {self.parte}"

class Bebida(models.Model):
    codigo = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=100)
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    disponible = models.BooleanField(default=True)

    def __str__(self):
        return f"Bebida {self.cantidad} - {self.tipo}"

class Crema(models.Model):
    codigo = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=100)
    disponible = models.BooleanField(default=True)

    def __str__(self):
        return f"Crema {self.tipo}"

class Pedido(models.Model):
    codigo = models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=255)
    cubiertos = models.BooleanField(default=False)
    pagoRealizado = models.BooleanField(default=False)
    pollos = models.ManyToManyField(Pollo, blank=True)
    bebidas = models.ManyToManyField(Bebida, blank=True)
    cremas = models.ManyToManyField(Crema, blank=True)
    papas = models.ManyToManyField(Papa, blank=True)

    def __str__(self):
        return f"Pedido {self.codigo} - {self.direccion}"

