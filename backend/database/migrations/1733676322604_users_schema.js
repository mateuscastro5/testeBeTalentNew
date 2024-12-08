'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsersSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('nome').notNullable();
      table.string('senha').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UsersSchema;
