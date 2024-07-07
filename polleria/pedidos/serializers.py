from rest_framework import serializers
from .models import Pollo, Bebida, Papa

class PolloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pollo
        fields = '__all__'

class BebidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bebida
        fields = '__all__'

class PapaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Papa
        fields = '__all__'