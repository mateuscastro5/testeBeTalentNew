'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venda extends Model {
  static get table() {
    return 'vendas';
  }

  static get primaryKey() {
    return 'id';
  }

  // Relacionamento com cliente
  cliente() {
    return this.belongsTo('App/Models/Cliente');
  }

  // Relacionamento com produto
  produto() {
    return this.belongsTo('App/Models/Produto');
  }
}

module.exports = Venda;
