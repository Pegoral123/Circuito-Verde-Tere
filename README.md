# 🌿 Circuito Terê Verde - Backend API

> MVP de Backend desenvolvido para a disciplina de MVP da faculdade. O objetivo é promover o turismo ecológico em Teresópolis-RJ através de um guia digital.

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Python](https://img.shields.io/badge/Python-3.12+-blue)
![Django](https://img.shields.io/badge/Django-5.0+-green)
![DRF](https://img.shields.io/badge/DRF-API-red)

## 📖 Sobre o Projeto

O **Circuito Terê Verde** é uma aplicação que conecta turistas e amantes da natureza aos parques naturais de Teresópolis.

Este repositório contém a **API RESTful** (Backend) que gerencia os dados e alimenta o Frontend (Vue.js/TypeScript). O sistema permite que administradores gerenciem o conteúdo via painel administrativo e fornece endpoints públicos para consulta.

### 🎯 Funcionalidades Principais

* **Painel Administrativo (Django Admin):**
    * Autenticação segura para administradores.
    * CRUD completo de Parques, Trilhas, Eventos e Novidades.
* **API RESTful:**
    * Endpoints públicos para consumo do Frontend.
    * Serialização aninhada (ex: listar trilhas dentro do detalhe do parque).
    * Configuração de CORS para integração com aplicações externas.

---

## 🛠 Tecnologias Utilizadas

* **Linguagem:** [Python](https://www.python.org/)
* **Framework Web:** [Django](https://www.djangoproject.com/)
* **API:** [Django REST Framework](https://www.django-rest-framework.org/)
* **Banco de Dados:** MySQL (Conector: `PyMySQL`)
* **Segurança:** `python-dotenv` (Variáveis de ambiente)
* **Integração:** `django-cors-headers`

---

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos

* Python 3 instalado.
* MySQL Server rodando.
* Git.

### 1. Clone o repositório

```bash
git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
cd backend

2. Crie e ative o ambiente virtualBash# Windows
python -m venv venv
.\venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
3. Instale as dependênciasBashpip install -r requirements.txt
4. Configure o Banco de Dados e Variáveis de AmbienteCrie um banco de dados no seu MySQL chamado tere_verde_db.Na raiz do projeto, crie um arquivo chamado .env (baseado no .env.example).Preencha com suas credenciais:Snippet de código# Exemplo de .env
DJANGO_SECRET_KEY='sua-chave-secreta-aqui'
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost

DB_ENGINE=django.db.backends.mysql
DB_NAME=tere_verde_db
DB_USER=root
DB_PASSWORD=sua_senha_mysql
DB_HOST=127.0.0.1
DB_PORT=3306
5. Execute as MigraçõesIsso criará as tabelas no seu banco de dados MySQL.Bashpython manage.py migrate
6. Crie um Superusuário (Admin)Para acessar o painel administrativo:Bashpython manage.py createsuperuser
7. Inicie o ServidorBashpython manage.py runserver
O servidor estará rodando em: http://127.0.0.1:8000/🔗 Endpoints da APIA API segue o padrão REST. O prefixo base é /api/v1/.MétodoEndpointDescriçãoGET/api/v1/parques/Lista todos os parques (inclui trilhas aninhadas).GET/api/v1/trilhas/Lista todas as trilhas.GET/api/v1/eventos/Lista eventos (ordenados por data).GET/api/v1/novidades/Lista novidades (ordenadas por publicação).Nota: A API é Read-Only (apenas leitura) para o público. A edição de dados é feita exclusivamente via /admin/.👥 AutoresJhonathan Pegoral - Backend & DevOpsCarlos - Frontend (Vue.js/TypeScript)
