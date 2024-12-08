'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VendasSchema extends Schema {
  up() {
    this.create('vendas', (table) => {
      table.increments('id').primary();
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE');
      table.integer('produto_id').unsigned().references('id').inTable('produtos').onDelete('CASCADE');
      table.integer('quantidade').notNullable();
      table.decimal('preco_unitario', 12, 2).notNullable();
      table.decimal('preco_total', 12, 2).notNullable();
      table.timestamp('data').defaultTo(this.fn.now());
      table.timestamps();
    });
  }

  down() {
    this.drop('vendas');
  }
}

module.exports = VendasSchema;
