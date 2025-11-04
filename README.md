# 🏞️ Circuito Terê Verde Online

Projeto desenvolvido para [Nome da Disciplina/Cliente] com o objetivo de criar uma plataforma digital para promover o turismo ecológico e fornecer informações sobre os parques naturais de Teresópolis.

## 📜 Descrição

A plataforma "Terê Verde Online" permite que visitantes acessem informações atualizadas sobre biodiversidade, trilhas, cachoeiras e eventos nos três principais parques da região. O sistema também conta com uma área administrativa para gestão do conteúdo.

## ✨ Features (Funcionalidades)

- **Visitantes:**
  - Visualização de Parques, Trilhas e Eventos.
  - Busca por informações.
  - Acesso a notícias e condições atuais.
- **Administradores:**
  - Login seguro.
  - Gestão (CRUD) de Parques.
  - Gestão (CRUD) de Trilhas.
  - Gestão (CRUD) de Eventos e Novidades.

## 💻 Tech Stack

- **Backend:** Python 3, FastAPI
- **Frontend:** Vue.js 3 (Composition API)
- **Autenticação:** Firebase Authentication (ou JWT)
- **Banco de Dados:** [Definir - ex: PostgreSQL, SQLite, Firebase Firestore]

## 🚀 Como Rodar o Projeto

### Backend (FastAPI)

1.  Navegue até a pasta `backend`: `cd backend`
2.  Crie e ative um ambiente virtual:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # (ou .\.venv\Scripts\activate no Windows)
    ```
3.  Instale as dependências: `pip install -r requirements.txt`
4.  Rode o servidor: `uvicorn app.main:app --reload`
5.  A API estará disponível em `http://127.0.0.1:8000`

### Frontend (Vue.js)

1.  Navegue até a pasta `frontend`: `cd frontend`
2.  Instale as dependências: `npm install`
3.  Rode o servidor de desenvolvimento: `npm run dev`
4.  O site estará disponível em `http://127.0.0.1:5173` (ou porta similar)

## 👥 Autores

- Jhonathan da Silva Pegoral
- Carlos [Sobrenome]
