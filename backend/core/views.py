from rest_framework import viewsets
from .models import Parque, Trilha, Evento, Novidade
from .serializers import TrilhaSerializer, ParqueSerializer, EventoSerializer, NovidadeSerializer


class ParqueViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Parque.objects.all()
    serializer_class = ParqueSerializer

class TrilhaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Trilha.objects.all()
    serializer_class = TrilhaSerializer

class EventoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Evento.objects.all().order_by('-data')
    serializer_class = EventoSerializer

class NovidadeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Novidade.objects.all().order_by('-data_publicacao')
    serializer_class = NovidadeSerializer