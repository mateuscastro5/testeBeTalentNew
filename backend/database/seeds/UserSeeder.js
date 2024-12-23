'use strict'

const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run() {
    try {
      await Database.table('users').delete()

      const users = await Factory
        .model('App/Models/User')
        .createMany(5)

      const count = await Database.table('users').count('* as count')
      if (count[0].count === 0) {
        throw new Error('Failed to create users')
      }

      console.log('Users created successfully')
      return users
    } catch (error) {
      console.error('Error creating users:', error.message)
      throw error
    }
  }
}

module.exports = UserSeeder