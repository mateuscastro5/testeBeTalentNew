'use strict'

class Auth {
  async handle ({ request, auth, response }, next) {
    try {
      // Verifica o token JWT
      await auth.check()
      await next()
    } catch (error) {
      return response.status(401).json({ message: 'Unauthorized' })
    }
  }
}

module.exports = Auth
