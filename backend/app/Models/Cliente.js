'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
  static get table() {
    return 'clientes';
  }

  static get primaryKey() {
    return 'id';
  }

  // Relacionamento com o usuário (cada cliente pertence a um usuário)
  user() {
    return this.belongsTo('App/Models/User');
  }

  // Relacionamento com endereços
  endereco() {
    return this.hasOne('App/Models/Endereco');
  }

  // Relacionamento com telefones
  telefones() {
    return this.hasMany('App/Models/Telefone');
  }

  // Relacionamento com vendas
  vendas() {
    return this.hasMany('App/Models/Venda');
  }
}

module.exports = Cliente;

