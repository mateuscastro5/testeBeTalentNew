'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  static get table() {
    return 'produtos';
  }

  static get primaryKey() {
    return 'id';
  }

  // Relacionamento com vendas (um produto pode ter muitas vendas)
  vendas() {
    return this.hasMany('App/Models/Venda');
  }
}

module.exports = Produto;
