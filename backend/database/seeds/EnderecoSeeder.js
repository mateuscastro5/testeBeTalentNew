'use strict'

const Factory = use('Factory')
const Database = use('Database')

class EnderecoSeeder {
  async run() {
    try {
      await Database.table('enderecos').delete()

      const Cliente = use('App/Models/Cliente')
      const clientes = await Cliente.all()

      for (let cliente of clientes.rows) {
        await Factory
          .model('App/Models/Endereco')
          .create({ cliente_id: cliente.id })
      }

      console.log('Endereços created successfully')
    } catch (error) {
      console.error('Error creating addresses:', error.message)
      throw error
    }
  }
}

module.exports = EnderecoSeeder
