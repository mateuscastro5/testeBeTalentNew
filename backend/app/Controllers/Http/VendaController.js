'use strict'

const Venda = use('App/Models/Venda')
const Produto = use('App/Models/Produto')

class VendaController {
  async store({ request, response }) {
    const data = request.only(['cliente_id', 'produto_id', 'quantidade'])
    
    // Buscar produto para calcular preço
    const produto = await Produto.find(data.produto_id)
    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    // Calcular preços
    const preco_unitario = produto.preco
    const preco_total = preco_unitario * data.quantidade

    // Criar venda
    const venda = await Venda.create({
      ...data,
      preco_unitario,
      preco_total,
      data: new Date()
    })

    return response.status(201).json(venda)
  }
}

module.exports = VendaController