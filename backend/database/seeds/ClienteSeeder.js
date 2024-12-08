'use strict'

const Factory = use('Factory')
const Database = use('Database')
const User = use('App/Models/User')

class ClienteSeeder {
  async run() {
    try {
      await Database.table('clientes').delete()

      const users = await User.all()
      
      if (!users || users.rows.length === 0) {
        throw new Error('No users found. Please run UserSeeder first.')
      }

      for (const user of users.rows) {
        await Factory
          .model('App/Models/Cliente')
          .createMany(2, { user_id: user.id })
      }

      console.log('Clientes created successfully')
    } catch (error) {
      console.error('Error creating clients:', error.message)
      throw error
    }
  }
}

module.exports = ClienteSeeder

