# Teste Técnico BeTalent - Backend

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

4. Execute o setup para configurar o ambiente:
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
- **POST /signup**: Registra um novo usuário.

### Clientes

- **GET /clientes**: Lista todos os clientes.
- **GET /clientes/:id**: Exibe detalhes de um cliente específico.
- **POST /clientes**: Cria um novo cliente.
- **PUT /clientes/:id**: Atualiza um cliente existente.
- **DELETE /clientes/:id**: Remove um cliente.

### Produtos

- **GET /produtos**: Lista todos os produtos.
- **GET /produtos/:id**: Exibe detalhes de um produto específico.
- **POST /produtos**: Cria um novo produto.
- **PUT /produtos/:id**: Atualiza um produto existente.
- **DELETE /produtos/:id**: Remove um produto.

### Vendas

- **POST /vendas**: Cria uma nova venda.

## Informações Adicionais

- O projeto utiliza AdonisJS como framework principal.
- As migrações e seeders são executados automaticamente durante o setup.
- Certifique-se de que o Docker esteja instalado e em execução antes de iniciar o setup.


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
