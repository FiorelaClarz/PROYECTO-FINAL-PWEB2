from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    return render(request, 'home.html');

from .forms import PolloForm, BebidaForm, CremaForm, PapaForm

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