'use strict'

const Database = use('Database')

class DatabaseSeeder {
  async run() {
    try {
      console.log('Iniciando a execução dos seeders...')

      const UserSeeder = require('./UserSeeder')
      await new UserSeeder().run()
      console.log('UserSeeder executado.')

      const ClienteSeeder = require('./ClienteSeeder')
      await new ClienteSeeder().run()
      console.log('ClienteSeeder executado.')

      const ProdutoSeeder = require('./ProdutoSeeder')
      await new ProdutoSeeder().run()
      console.log('ProdutoSeeder executado.')

      const VendaSeeder = require('./VendaSeeder')
      await new VendaSeeder().run()
      console.log('VendaSeeder executado.')

      const EnderecoSeeder = require('./EnderecoSeeder')
      await new EnderecoSeeder().run()
      console.log('EnderecoSeeder executado.')

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