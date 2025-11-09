from django.db import models

class Parque(models.Model):
    nome = models.CharField(max_length=100)
    descrição = models.TextField()
    localizacao = models.CharField(max_length=255)


class Trilha(models.Model):
    STATUS_CHOICES = [
        ('ABERTA', 'ABERTA'),
        ('FECHADA', 'Fechada'),
        ('EM_MANUTENCAO', 'Em Manutenção'),
    ]
    parque = models.ForeignKey(Parque, on_delete=models.CASCADE, related_name='trilhas')
    nome = models.CharField(max_length=100)
    extensão_km = models.DecimalField(max_digits=5, decimal_places=2)
    dificuldade = models.CharField(max_length=50)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='ABERTA')

    def __str__(self):
        return f"{self.nome} ({self.parque.nome}) - {self.status} - {self.extensão_km} km - {self.dificuldade}"
    
  
class Evento(models.Model):
    parque = models.ForeignKey(Parque, on_delete=models.SET_NULL, null=True, blank=True , related_name='eventos')
    titulo = models.CharField(max_length=100)
    data = models.DateField()
    local = models.CharField(max_length=255)
    descricao = models.TextField()   

class Novidade(models.Model):
    titulo = models.CharField(max_length=100)
    conteudo = models.TextField()
    data_publicacao = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.titulo

