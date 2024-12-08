'use strict'

/*
|--------------------------------------------------------------------------
| VendaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class VendaSeeder {
  async run() {
    // Cria 10 vendas fictícias
    await Factory.model('App/Models/Venda').createMany(10);
  }
}

module.exports = VendaSeeder;

