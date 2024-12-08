'use strict'

const Route = use('Route')


Route.post('login', 'AuthController.login') // Remove leading slash
Route.post('signup', 'AuthController.signup') // Remove leading slash

// Rotas protegidas
Route.group(() => {
  // Rotas de Clientes
  Route.get('clientes', 'ClienteController.index')
  Route.get('clientes/:id', 'ClienteController.show')
  Route.post('clientes', 'ClienteController.store')
  Route.put('clientes/:id', 'ClienteController.update')
  Route.delete('clientes/:id', 'ClienteController.delete')

  // Rotas de Produtos
  Route.get('produtos', 'ProdutoController.index')
  Route.get('produtos/:id', 'ProdutoController.show')
  Route.post('produtos', 'ProdutoController.store')
  Route.put('produtos/:id', 'ProdutoController.update')
  Route.delete('produtos/:id', 'ProdutoController.delete')

  // Rotas de Vendas
  Route.post('vendas', 'VendaController.store')
}).middleware(['auth'])