# 🌿 Circuito Terê Verde - Fullstack Project

> MVP desenvolvido para a disciplina de Backend/Fullstack. O objetivo é promover o turismo ecológico em Teresópolis-RJ através de um guia digital interativo.

![Status](https://img.shields.io/badge/Status-concluído-green)
![Python](https://img.shields.io/badge/Python-3.12+-blue)
![Django](https://img.shields.io/badge/Django-5.0+-green)
![React](https://img.shields.io/badge/Frontend-React-blue)

---

## Sobre o Projeto

O **Circuito Terê Verde** é uma aplicação Fullstack que conecta turistas e amantes da natureza aos parques naturais de Teresópolis.

O sistema é composto por uma **API RESTful** robusta no Backend e uma **Single Page Application (SPA)** moderna no Frontend. O sistema permite que administradores gerenciem o conteúdo via painel administrativo seguro, enquanto turistas acessam informações atualizadas sobre trilhas e eventos.

## 📋 Requisitos do Sistema

O projeto foi desenvolvido atendendo aos seguintes requisitos funcionais e não-funcionais:

### 👤 Requisitos Funcionais (RF)

#### Módulo Administrativo (Gestão)
| ID | Descrição | Status |
| :--- | :--- | :--- |
| **RF01** | O administrador deve poder se autenticar no sistema (Login seguro). 
| **RF02** | O administrador deve poder criar, editar e excluir (CRUD) informações dos Parques (Serra dos Órgãos, Três Picos, Montanhas de Teresópolis). 
| **RF03** | O administrador deve poder gerenciar Trilhas associadas a um parque específico. 
| **RF04** | O administrador deve poder gerenciar Eventos (com data, local e descrição). 
| **RF05** | O administrador deve poder publicar "Novidades" ou atualizações de condições (ex: alertas de trilhas fechadas). 

#### Módulo Visitante (Público)
| ID | Descrição | Status |
| :--- | :--- | :--- |
| **RF06** | O visitante deve visualizar a lista de parques na página inicial.
| **RF07** | O visitante deve poder acessar os detalhes de um parque (trilha). 
| **RF08** | O visitante deve visualizar a lista de eventos futuros. 
| **RF09** | O visitante deve visualizar as notícias e atualizações mais recentes. 

### ⚙️ Requisitos Não-Funcionais (RNF)

* **RNF01 - Desempenho:** O sistema deve garantir respostas ágeis na API, suportando múltiplos usuários simultâneos.
* **RNF02 - Segurança:** A área administrativa deve ser protegida por autenticação e senhas criptografadas.
* **RNF03 - Usabilidade:** A interface deve ser intuitiva e fácil de navegar tanto para administradores quanto para visitantes.
* **RNF04 - Responsividade:** O Frontend deve se adaptar a dispositivos Desktop, Tablet e Mobile.
* **RNF05 - Versionamento:** Todo o código-fonte deve ser versionado no GitHub.
* **RNF06 - Documentação:** O projeto deve conter instruções claras de instalação e uso (README).
* **RNF07 - Manutenibilidade:** Estrutura de diretórios organizada e código limpo.

---

### Funcionalidades Principais

- **Painel Administrativo (Django Admin):**

  - Autenticação segura e gestão de usuários.
  - CRUD completo de Parques, Trilhas, Eventos e Novidades.

- **API RESTful:**

  - Endpoints públicos otimizados para consumo do Frontend.
  - Serialização aninhada (ex: visualização de trilhas dentro do detalhe do parque).
  - Configuração de CORS para integração segura.

- **Interface Pública (Frontend):**
  - Visualização de parques e detalhes de trilhas.
  - Listagem de eventos e novidades em tempo real.

---

## Tecnologias Utilizadas

**Backend** Python 3, Django 5, Django REST Framework (DRF)
**Frontend** React, TypeScript, Vite, Tailwind CSS, Axios
**Banco de Dados** MySQL (Driver: PyMySQL)
**Segurança/Env** python-dotenv, django-cors-headers

---

## 📂 Estrutura do Repositório

- `backend/` — API Django (contém settings, models, migrations e lógica de negócio).
- `frontend/` — Aplicação React + Vite.

---

### Pré-requisitos

- Python 3.10+
- Node.js 18+
- MySQL Server rodando
- Git

Como rodar (PowerShell)

Backend (Django)

1. Vá para a pasta do backend e ative o ambiente virtual (ajuste o caminho se seu venv tiver outro nome):

```powershell
cd C:\Circuito-Verde-Tere\backend
.\venv\Scripts\Activate.ps1
```

2. Instale dependências (se necessário):

```powershell
pip install -r requirements.txt
```

3. Configure variáveis de ambiente (veja `.env.example` ou `backend/.env`), especialmente `DATABASES`.

4. Gerar e aplicar migrações:

```powershell
python manage.py makemigrations
python manage.py migrate
```

5. Criar superusuário (para acessar o admin):

```powershell
python manage.py createsuperuser
```

6. Rodar servidor de desenvolvimento:

```powershell
python manage.py runserver
```

URLs úteis (produção/desenvolvimento)

- Admin Django: `http://127.0.0.1:8000/admin/`
- Exemplo de endpoints gerados pelo router: `http://127.0.0.1:8000/parques/`, `http://127.0.0.1:8000/eventos/`

Frontend (Vite + React)

1. Entre na pasta do frontend:

```powershell
cd ..\frontend
```

2. Instale dependências:

```powershell
npm install
```

3. Rodar em modo desenvolvimento:

```powershell
npm run dev
```


## 👥 Autores

Jhonathan Pegoral

Carlos
