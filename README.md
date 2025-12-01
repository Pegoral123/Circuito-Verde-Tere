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

## 👥 Autores
Jhonathan Pegoral 

Carlos 
