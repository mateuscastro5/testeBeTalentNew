'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {
  async index({ response }) {
    const produtos = await Produto.query()
      .whereNull('deleted_at')
      .orderBy('nome', 'asc')
      .fetch()
    
    return response.json(produtos)
  }

  async show({ params, response }) {
    const produto = await Produto.find(params.id)
    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }
    return response.json(produto)
  }

  async store({ request, response }) {
    const data = request.only(['nome', 'preco'])
    const produto = await Produto.create(data)
    return response.status(201).json(produto)
  }

  async update({ params, request, response }) {
    const produto = await Produto.find(params.id)
    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    const data = request.only(['nome', 'preco'])
    produto.merge(data)
    await produto.save()
    return response.json(produto)
  }

  async delete({ params, response }) {
    const produto = await Produto.find(params.id)
    if (!produto) {
      return response.status(404).json({ message: 'Produto não encontrado' })
    }

    // Soft delete
    produto.deleted_at = new Date()
    await produto.save()
    return response.status(204).send()
  }
}

module.exports = ProdutoController