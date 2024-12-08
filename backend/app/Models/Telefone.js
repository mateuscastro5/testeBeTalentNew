'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Telefone extends Model {
  static get table() {
    return 'telefones';
  }

  static get primaryKey() {
    return 'id';
  }

  // Relacionamento com cliente
  cliente() {
    return this.belongsTo('App/Models/Cliente');
  }
}

module.exports = Telefone;

