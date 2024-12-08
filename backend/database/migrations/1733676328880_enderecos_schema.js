'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EnderecosSchema extends Schema {
  up() {
    this.create('enderecos', (table) => {
      table.increments('id').primary();
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE');
      table.string('logradouro').notNullable();
      table.string('numero').notNullable();
      table.string('bairro').notNullable();
      table.string('cidade').notNullable();
      table.string('estado').notNullable();
      table.string('cep').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('enderecos');
  }
}

module.exports = EnderecosSchema;
