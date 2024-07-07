from django import forms
from .models import Pollo, Bebida, Crema, Papa, Pedido

class PedidoForm(forms.ModelForm):
    class Meta:
        model = Pedido
        fields = ['direccion', 'cubiertos', 'pagoRealizado']
class PolloForm(forms.ModelForm):
    class Meta:
        model = Pollo
        fields = ['cantidad', 'precio', 'parte', 'disponible']

class BebidaForm(forms.ModelForm):
    class Meta:
        model = Bebida
        fields = ['tipo', 'cantidad', 'precio', 'disponible']

class CremaForm(forms.ModelForm):
    class Meta:
        model = Crema
        fields = ['tipo', 'disponible']

class PapaForm(forms.ModelForm):
    class Meta:
        model = Papa
        fields = ['porcion', 'precio']