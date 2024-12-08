'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProdutosSchema extends Schema {
  up() {
    this.create('produtos', (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.decimal('preco', 12, 2).notNullable();
      table.timestamp('deleted_at').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('produtos');
  }
}

module.exports = ProdutosSchema;
