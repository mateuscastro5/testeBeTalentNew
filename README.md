# Teste Técnico BeTalent - Backend

## Requisitos

- Node.js (versão 12 ou superior)
- NPM (versão 6 ou superior)
- Docker e Docker Compose

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/senagram.git
    cd senagram/backend
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

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
