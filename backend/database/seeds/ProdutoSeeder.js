'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class ProdutoSeeder {
  async run() {
    // Cria 10 produtos fictícios
    await Factory.model('App/Models/Produto').createMany(10);
  }
}

module.exports = ProdutoSeeder;

