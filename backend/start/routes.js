'use strict'

const Route = use('Route')

// Rota para a raiz do sistema
Route.get('/', () => {
  return { message: 'Bem-vindo à API!' }
})

// Rota para cadastro de usuário
Route.post('signup', 'AuthController.signup')

// Rota para login de usuário
Route.post('login', 'AuthController.login')

// Rotas protegidas por autenticação JWT
Route.group(() => {
  Route.get('clientes', 'ClienteController.index')
  Route.post('clientes', 'ClienteController.store')
  Route.get('clientes/:id', 'ClienteController.show')
  Route.put('clientes/:id', 'ClienteController.update')
  Route.delete('clientes/:id', 'ClienteController.delete')

  Route.get('produtos', 'ProdutoController.index')
  Route.post('produtos', 'ProdutoController.store')
  Route.get('produtos/:id', 'ProdutoController.show')
  Route.put('produtos/:id', 'ProdutoController.update')
  Route.delete('produtos/:id', 'ProdutoController.delete')

  Route.post('vendas', 'VendaController.store')
}).middleware(['auth'])
