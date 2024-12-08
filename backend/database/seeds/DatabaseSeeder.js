'use strict'

const Database = use('Database')

class DatabaseSeeder {
  async run() {
    try {
      console.log('Iniciando a execução dos seeders...')

      // Clean up all tables first - in correct order
      // console.log('Limpando tabelas...')
      // await Database.table('telefones').truncate()
      // await Database.table('enderecos').truncate()
      // await Database.table('vendas').truncate()
      // await Database.table('produtos').truncate()
      // await Database.table('clientes').truncate()
      // await Database.table('users').truncate()

      // 1. Seed Users first
      const UserSeeder = require('./UserSeeder')
      await new UserSeeder().run()
      console.log('UserSeeder executado.')

      // 2. Then Clients
      const ClienteSeeder = require('./ClienteSeeder')
      await new ClienteSeeder().run()
      console.log('ClienteSeeder executado.')

      // 3. Then Products
      const ProdutoSeeder = require('./ProdutoSeeder')
      await new ProdutoSeeder().run()
      console.log('ProdutoSeeder executado.')

      // 4. Then Sales
      const VendaSeeder = require('./VendaSeeder')
      await new VendaSeeder().run()
      console.log('VendaSeeder executado.')

      // 5. Then Addresses
      const EnderecoSeeder = require('./EnderecoSeeder')
      await new EnderecoSeeder().run()
      console.log('EnderecoSeeder executado.')

      // 6. Finally Phones
      const TelefoneSeeder = require('./TelefoneSeeder')
      await new TelefoneSeeder().run()
      console.log('TelefoneSeeder executado.')

      console.log('Todos os seeders foram executados com sucesso!')
    } catch (error) {
      console.error('Erro durante o seeding:', error.message)
      throw error
    }
  }
}

module.exports = DatabaseSeeder