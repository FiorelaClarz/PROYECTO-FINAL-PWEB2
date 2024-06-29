from django.shortcuts import render, get_object_or_404, redirect
from .forms import PolloForm, BebidaForm, CremaForm, PapaForm
from .models import Pollo, Bebida, Papa, Crema, Pedido
from .forms import PedidoForm
# Create your views here.
def home(request):
    pollos = Pollo.objects.filter(disponible=True)
    bebidas = Bebida.objects.filter(disponible=True)
    papas = Papa.objects.all()
    return render(request, 'home.html', {'pollos': pollos, 'bebidas': bebidas, 'papas': papas});

def detalle_producto(request, producto_id, producto_tipo):
    if producto_tipo == 'pollo':
        producto = get_object_or_404(Pollo, pk=producto_id)
        producto_nombre = producto.parte
    elif producto_tipo == 'bebida':
        producto = get_object_or_404(Bebida, pk=producto_id)
        producto_nombre = producto.tipo
    elif producto_tipo == 'papa':
        producto = get_object_or_404(Papa, pk=producto_id)
        producto_nombre = producto.porcion
    else:
        return redirect('home')

    pollos = Pollo.objects.filter(disponible=True)
    bebidas = Bebida.objects.filter(disponible=True)
    papas = Papa.objects.all()
    cremas = Crema.objects.filter(disponible=True)
    
    carrito = request.session.get('carrito', [])

    if request.method == 'POST':
        accion = request.POST.get('accion')
        producto_carrito = {'id': producto_id, 'tipo': producto_tipo}
        if accion == 'add':
            carrito.append(producto_carrito)
        elif accion == 'remove':
            carrito = [item for item in carrito if not (item['id'] == producto_id and item['tipo'] == producto_tipo)]
        request.session['carrito'] = carrito
        return redirect('detalle_producto', producto_id=producto_id, producto_tipo=producto_tipo)

    return render(request, 'detalle_producto.html', {
        'producto': producto,
        'producto_nombre': producto_nombre,
        'pollos': pollos,
        'bebidas': bebidas,
        'papas': papas,
        'cremas': cremas,
        'carrito': carrito,
    })

def hacer_pedido(request):
    carrito = request.session.get('carrito', [])
    if not carrito:
        return redirect('home')

    if request.method == 'POST':
        form = PedidoForm(request.POST)
        if form.is_valid():
            pedido = form.save()
            for item in carrito:
                if item['tipo'] == 'pollo':
                    producto = get_object_or_404(Pollo, pk=item['id'])
                    pedido.pollos.add(producto)
                elif item['tipo'] == 'bebida':
                    producto = get_object_or_404(Bebida, pk=item['id'])
                    pedido.bebidas.add(producto)
                elif item['tipo'] == 'papa':
                    producto = get_object_or_404(Papa, pk=item['id'])
                    pedido.papas.add(producto)
                elif item['tipo'] == 'crema':
                    producto = get_object_or_404(Crema, pk=item['id'])
                    pedido.cremas.add(producto)
            request.session['carrito'] = []
            return render(request, 'confirmacion_pedido.html', {'pedido': pedido})
    else:
        form = PedidoForm()

    total = sum(
        get_object_or_404(Pollo, pk=item['id']).precio if item['tipo'] == 'pollo' else
        get_object_or_404(Bebida, pk=item['id']).precio if item['tipo'] == 'bebida' else
        get_object_or_404(Papa, pk=item['id']).precio for item in carrito
    )

    return render(request, 'hacer_pedido.html', {'form': form, 'carrito': carrito, 'total': total})

def crear_pollo(request):
    if request.method == 'POST':
        form = PolloForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('crear_pollo')
    else:
        form = PolloForm()
    return render(request, 'crear_pollo.html', {'form': form})

def crear_bebida(request):
    if request.method == 'POST':
        form = BebidaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('crear_bebida')
    else:
        form = BebidaForm()
    return render(request, 'crear_bebida.html', {'form': form})

def crear_crema(request):
    if request.method == 'POST':
        form = CremaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('crear_crema')
    else:
        form = CremaForm()
    return render(request, 'crear_crema.html', {'form': form})

def crear_papa(request):
    if request.method == 'POST':
        form = PapaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('crear_papa')
    else:
        form = PapaForm()
    return render(request, 'crear_papa.html', {'form': form})

from rest_framework import viewsets
from .models import Pollo, Bebida, Papa
from .serializers import PolloSerializer, BebidaSerializer, PapaSerializer

class PolloViewSet(viewsets.ModelViewSet):
    queryset = Pollo.objects.filter(disponible=True)
    serializer_class = PolloSerializer

class BebidaViewSet(viewsets.ModelViewSet):
    queryset = Bebida.objects.filter(disponible=True)
    serializer_class = BebidaSerializer

class PapaViewSet(viewsets.ModelViewSet):
    queryset = Papa.objects.all()
    serializer_class = PapaSerializer