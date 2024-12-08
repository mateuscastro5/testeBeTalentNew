'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')
const jwt = use('Adonis/Src/Hash')

class AuthController {
  // Método para cadastrar um novo usuário
  async signup({ request, response }) {
    const { email, password } = request.only(['email', 'password'])

    // Criação do usuário
    const user = await User.create({ email, password })

    return response.status(201).json({
      message: 'Usuário criado com sucesso',
      user,
    })
  }

  // Método para fazer o login do usuário
  async login({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    // Verificar se o email existe
    const user = await User.findBy('email', email)
    if (!user) {
      return response.status(404).json({ message: 'Usuário não encontrado' })
    }

    // Verificar a senha
    const validPassword = await Hash.verify(password, user.password)
    if (!validPassword) {
      return response.status(400).json({ message: 'Senha incorreta' })
    }

    // Gerar o token JWT
    const token = await auth.generate(user)

    return response.json({
      message: 'Login realizado com sucesso',
      token,
    })
  }
}

module.exports = AuthController
