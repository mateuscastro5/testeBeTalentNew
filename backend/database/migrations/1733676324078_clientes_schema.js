'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClientesSchema extends Schema {
  up() {
    this.create('clientes', (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('cpf').notNullable().unique();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('clientes');
  }
}

module.exports = ClientesSchema;
