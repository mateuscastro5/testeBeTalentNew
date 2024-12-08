'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TelefonesSchema extends Schema {
  up() {
    this.create('telefones', (table) => {
      table.increments('id').primary();
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE');
      table.string('numero').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('telefones');
  }
}

module.exports = TelefonesSchema;
