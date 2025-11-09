from django.contrib import admin
from .models import Parque, Trilha, Evento, Novidade

admin.site.register(Parque)
class parqueAdmin(admin.ModelAdmin):
    list_display = ('Nome', 'Descricao', 'Localizacao')
    search_fields = ('nome', 'localizacao')

admin.site.register(Trilha)
class TrilhaAdmin(admin.ModelAdmin):
    list_display = ('Parque', 'Nome', 'Extensão em KM', 'Dificuldade', 'Status')
    lister_fields = ('Nome', 'Dificuldade', 'Status')
    search_fields = ('nome', 'parque')


admin.site.register(Evento)
class EventoAdmin(admin.ModelAdmin):
    list_display = ('Parque', 'Titulo', 'Data', 'Local', 'Descricao')
    search_fields = ('titulo', 'parque')

admin.site.register(Novidade)
class NovidadeAdmin(admin.ModelAdmin):
    list_display = ('Titulo', 'Conteudo', 'Data de Publicacao')
    search_fields = ('titulo',)