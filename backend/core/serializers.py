from rest_freamework import serializers
from .models import Parque,Trilha,Evento, Novidade

class TrilhaSerializer(serializers.ModelSerializer):
  class meta:
    model = Trilha
    fields = ['id','parque','nome','extensao_km','dificuldade','status']

class ParqueSerializer(serializers.ModelSerializer):

  trilhas = TrilhaSerializer(many=True, read_only=True)
  class meta:
    model = Parque
    fields = ['id','nome','descricao','localizacao', 'trilhas']


class EventoSerializer(serializers.modelSerializer):
  class meta:
    model = Evento
    fields = '__all__'


class NovidadeSerializer(serializers.modelSerializer):
  class meta:
    model = Novidade
    fields = '__all__'

    