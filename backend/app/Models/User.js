'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static get table() {
    return 'users';
  }

  static get primaryKey() {
    return 'id';
  }

  /**
   * Antes de salvar o usuário, criptografa a senha.
   */
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        userInstance.senha = await Hash.make(userInstance.senha)
      }
    })
  }

  static get hidden() {
    return ['senha']
  }

  // Relacionamento com clientes
  clientes() {
    return this.hasMany('App/Models/Cliente');
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User;
