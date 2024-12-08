'use strict'

class Auth {
  async handle({ request, auth, response }, next) {
    try {
      await auth.check()
      await next()
    } catch (error) {
      return response.status(401).json({
        message: 'Unauthorized - Você precisa estar logado para acessar esta rota'
      })
    }
  }
}

module.exports = Auth