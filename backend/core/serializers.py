from rest_framework import serializers
from .models import Parque,Trilha,Evento, Novidade

class TrilhaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Trilha
    fields = ['id','parque','nome','extensao_km','dificuldade','status']

class ParqueSerializer(serializers.ModelSerializer):

  trilhas = TrilhaSerializer(many=True, read_only=True)
  class Meta:
    model = Parque
    fields = ['id','nome','descricao','localizacao', 'trilhas']


class EventoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Evento
    fields = '__all__'


class NovidadeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Novidade
    fields = '__all__'

    