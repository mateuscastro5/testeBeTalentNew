# Teste Técnico BeTalent - Backend

## JSON Coleção do POSTMAN

Caso deseje utilizar POSTMAN para testar os endpoints, encontrará na raiz do projeto a collection já organizada
para os testes necessários, salva como "EndPointTestMATEUS.postman_collection.json". Apenas lembre-se de trocar o token fornecido ao fazer login no Header.

## Requisitos

- Node.js (versão 12 ou superior)
- NPM (versão 6 ou superior)
- Docker e Docker Compose

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/mateuscastro5/testeBeTalentNew.git
    cd /backend
    ```

2. Copie o arquivo de exemplo `.env`:
    ```bash
    cp .env.example .env
    ```

3. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.

4. Instale as dependências:
    ```bash
    npm install
    ```

5. Execute o setup para configurar o ambiente:
    ```bash
    npm run setup
    ```

## Rodando o Projeto

1. Inicie o servidor:
    ```bash
    npm run dev
    ```

2. O servidor estará disponível em `http://127.0.0.1:3333`.

## Detalhamento de Rotas

### Autenticação

- **POST /login**: Realiza login de um usuário.
    ```json
    {
      "email": "string",
      "senha": "string"
    }
    ```
- **POST /signup**: Registra um novo usuário.
    ```json
    {
      "email": "string",
      "nome": "string",
      "senha": "string"
    }
    ```

### Clientes

- **GET /clientes**: Lista todos os clientes.
- **GET /clientes/:id**: Exibe detalhes de um cliente específico.
- **POST /clientes**: Cria um novo cliente.
    ```json
    {
      "nome": "string",
      "cpf": "string",
      "user_id": "number"
    }
    ```
- **PUT /clientes/:id**: Atualiza um cliente existente.
    ```json
    {
      "nome": "string",
      "cpf": "string"
    }
    ```
- **DELETE /clientes/:id**: Remove um cliente.

### Produtos

- **GET /produtos**: Lista todos os produtos.
- **GET /produtos/:id**: Exibe detalhes de um produto específico.
- **POST /produtos**: Cria um novo produto.
    ```json
    {
      "nome": "string",
      "preco": "number"
    }
    ```
- **PUT /produtos/:id**: Atualiza um produto existente.
    ```json
    {
      "nome": "string",
      "preco": "number"
    }
    ```
- **DELETE /produtos/:id**: Remove um produto.

### Vendas

- **POST /vendas**: Cria uma nova venda.
    ```json
    {
      "cliente_id": "number",
      "produto_id": "number",
      "quantidade": "number"
    }
    ```

## Informações Adicionais

- O projeto utiliza AdonisJS como framework principal.
- As migrações e seeders são executados automaticamente durante o setup.
- Certifique-se de que o Docker esteja instalado e em execução antes de iniciar o setup.
