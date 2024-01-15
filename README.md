# Projeto de API de Usuários

Este projeto é uma API CRUD para gerenciar informações de usuários. Ele foi desenvolvido usando Node.js, Express.js, MongoDB, Mongoose e outras tecnologias.

## Ferramentas Utilizadas

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

## Como Executar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js: [Download](https://nodejs.org/)

### Passos

1. Clone o repositório

2. Instale as dependências:
    npm install

3. Configure a conexão com o MongoDB:
    .Crie um arquivo .env na raiz do projeto e adicione a string de conexão MongoDB Atlas:

    Exemplo:
        MONGODB_URI=sua-string-de-conexao-do-mongodb-atlas

4. Execute a aplicação:
    npm start

### Endpoints da API

.POST /api/usuarios: Criar um novo usuário.

.GET /api/usuarios: Obter todos os usuários.

.GET /api/usuarios/:id: Obter um usuário por ID.

.PUT /api/usuarios/:id: Atualizar um usuário por ID.

.DELETE /api/usuarios/:id: Excluir um usuário por ID.

### Observação

A API estará acessível em http://localhost:3000. Certifique-se de ajustar as configurações de porta, se necessário, no arquivo app.js.
