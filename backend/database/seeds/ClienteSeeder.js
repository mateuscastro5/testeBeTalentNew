'use strict'

const Factory = use('Factory')
const Database = use('Database')
const User = use('App/Models/User')

class ClienteSeeder {
  async run() {
    try {
      // Clear existing records
      await Database.table('clientes').delete()

      // Get all users
      const users = await User.all()
      
      if (!users || users.rows.length === 0) {
        throw new Error('No users found. Please run UserSeeder first.')
      }

      // Create clients for each user
      for (const user of users.rows) {
        await Factory
          .model('App/Models/Cliente')
          .createMany(2, { user_id: user.id }) // Create 2 clients per user
      }

      console.log('Clientes created successfully')
    } catch (error) {
      console.error('Error creating clients:', error.message)
      throw error
    }
  }
}

module.exports = ClienteSeeder

