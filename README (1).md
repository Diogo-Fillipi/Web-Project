# API de Cadastro

Esta API foi projetada para oferecer uma maneira eficaz de lidar com operações relacionadas a usuários. Seu conjunto de endpoints abrange desde a recuperação de todos os usuários cadastrados até operações específicas, como a inserção de novos usuários, alteração de senhas e exclusão de usuários.

## Instalação

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## **Clone o repositório:**

```bash
git clone https://github.com/Diogo-Fillipi/api-cadastro.git
```

## Instalação

```bash
cd api-cadastro
npm install
```

## Configure as variáveis de ambiente:
1. Crie um arquivo chamado .env na raiz do projeto e adicione as seguintes variáveis:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=sua-senha-db
DB_NAME=dbApiCadastro
```

## Inicie o servidor:
```bash
npm start
```

## Endpoints
1. GET /api/cadastros: Recupera todos os usuários cadastrados.
2. GET /api/cadastro/:nome: Recupera as informações de um usuário específico.
3. POST /api/cadastro: Insere um novo usuário.
4. PUT /api/cadastro/:nome: Altera a senha de um usuário.
5. DELETE /api/cadastro/:nome: Exclui um usuário.

## Tecnologias Utilizadas
1. Node.js
2. Express
3. MySQL
4. dotenv
5. nodemon (dependência de desenvolvimento)
