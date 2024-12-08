'use strict'

const Factory = use('Factory')
const Database = use('Database')

class TelefoneSeeder {
  async run() {
    try {
      await Database.table('telefones').delete()

      const Cliente = use('App/Models/Cliente')
      const clientes = await Cliente.all()

      if (!clientes || clientes.rows.length === 0) {
        throw new Error('No clients found. Please run ClienteSeeder first.')
      }

      for (let cliente of clientes.rows) {
        await Factory
          .model('App/Models/Telefone')
          .create({ cliente_id: cliente.id })
      }

      console.log('Telefones created successfully')
    } catch (error) {
      console.error('Error creating phones:', error.message)
      throw error
    }
  }
}

module.exports = TelefoneSeeder
