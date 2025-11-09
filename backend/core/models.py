from django.db import models


class Parque(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    localizacao = models.CharField(max_length=255)

    def __str__(self):
        return self.nome


class Trilha(models.Model):
    STATUS_CHOICES = [
        ('ABERTA', 'Aberta'),
        ('FECHADA', 'Fechada'),
        ('EM_MANUTENCAO', 'Em Manutenção'),
    ]
    parque = models.ForeignKey(Parque, on_delete=models.CASCADE, related_name='trilhas')
    nome = models.CharField(max_length=100)
    extensao_km = models.DecimalField(max_digits=5, decimal_places=2)
    dificuldade = models.CharField(max_length=50)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='ABERTA')

    def __str__(self):
        return f"{self.nome} ({self.parque.nome}) - {self.status} - {self.extensao_km} km - {self.dificuldade}"
    
  
class Evento(models.Model):
    parque = models.ForeignKey(Parque, on_delete=models.SET_NULL, null=True, blank=True , related_name='eventos')
    titulo = models.CharField(max_length=100)
    data = models.DateField()
    local = models.CharField(max_length=255)
    descricao = models.TextField()   

    def __str__(self):
        return f"{self.titulo} ({self.parque.nome})"

class Novidade(models.Model):
    parque = models.ForeignKey(Parque, on_delete=models.SET_NULL, null=True, blank=True , related_name='novidades')
    trilha = models.ForeignKey(Trilha, on_delete=models.SET_NULL, null=True, blank=True , related_name='novidades')
    titulo = models.CharField(max_length=100)
    conteudo = models.TextField()
    data_publicacao = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.trilha} - {self.titulo}"

