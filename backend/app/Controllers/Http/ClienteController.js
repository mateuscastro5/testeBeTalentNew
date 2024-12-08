'use strict'

const Cliente = use('App/Models/Cliente')
const Database = use('Database')

class ClienteController {
  async index({ response }) {
    const clientes = await Cliente.query()
      .select('id', 'nome', 'cpf')
      .orderBy('id', 'asc')
      .fetch()
    
    return response.json(clientes)
  }

  async show({ params, request, response }) {
    const { id } = params
    const { mes, ano } = request.get()

    const cliente = await Cliente.query()
      .where('id', id)
      .with('vendas', (builder) => {
        if (mes && ano) {
          builder.whereRaw('MONTH(data) = ? AND YEAR(data) = ?', [mes, ano])
        }
        builder.orderBy('data', 'desc')
      })
      .first()

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }

    return response.json(cliente)
  }

  async store({ request, response }) {
    const data = request.only(['nome', 'cpf', 'user_id'])
    const cliente = await Cliente.create(data)
    return response.status(201).json(cliente)
  }

  async update({ params, request, response }) {
    try {
      const cliente = await Cliente.find(params.id)
      if (!cliente) {
        return response.status(404).json({ 
          message: 'Cliente não encontrado' 
        })
      }

      const data = request.only(['nome', 'cpf'])
      
      // Se estiver tentando atualizar o CPF, verifica se já existe
      if (data.cpf && data.cpf !== cliente.cpf) {
        const cpfExists = await Cliente.query()
          .where('cpf', data.cpf)
          .whereNot('id', params.id)
          .first()
        
        if (cpfExists) {
          return response.status(400).json({
            message: 'CPF já está em uso por outro cliente'
          })
        }
      }

      cliente.merge(data)
      await cliente.save()
      
      return response.json({
        message: 'Cliente atualizado com sucesso',
        data: cliente
      })
    } catch (error) {
      return response.status(500).json({
        message: 'Erro ao atualizar cliente',
        error: error.message
      })
    }
  }

  async delete({ params, response }) {
    const cliente = await Cliente.find(params.id)
    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado' })
    }

    await cliente.delete()
    return response.status(204).send()
  }
}

module.exports = ClienteController