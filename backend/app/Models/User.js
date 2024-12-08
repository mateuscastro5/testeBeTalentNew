'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash');

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
    super.boot();

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  // Relacionamento com clientes
  clientes() {
    return this.hasMany('App/Models/Cliente');
  }
}

module.exports = User;
