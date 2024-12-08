'use strict'

const User = use('App/Models/User')

class AuthController {
  async signup({ request, response }) {
    try {
      const { email, nome, senha } = request.only(['email', 'nome', 'senha'])
      const user = await User.create({ email, nome, senha })
      
      return response.status(201).json({
        message: 'Usuário criado com sucesso',
        data: user
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao criar usuário',
        error: error.message
      })
    }
  }

  async login({ request, auth, response }) {
    try {
      const { email, senha } = request.only(['email', 'senha'])
      const token = await auth.attempt(email, senha)
      
      return response.json({
        message: 'Login realizado com sucesso',
        data: token
      })
    } catch (error) {
      return response.status(401).json({
        message: 'Credenciais inválidas'
      })
    }
  }
}

module.exports = AuthController