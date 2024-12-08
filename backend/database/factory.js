'use strict'

const casual = require('casual')
const Factory = use('Factory')
const Hash = use('Hash')

function generateCPF() {
  const numbers = casual.array_of_digits(9).join('')
  return `${numbers.substr(0,3)}.${numbers.substr(3,3)}.${numbers.substr(6,3)}-${casual.array_of_digits(2).join('')}`
}

Factory.blueprint('App/Models/User', async () => {
  const email = casual.email
  const senha = casual.password
  
  return {
    email,
    nome: casual.full_name,
    senha: await Hash.make(senha)
  }
})

Factory.blueprint('App/Models/Cliente', async (faker, data) => {
  let user_id

  if (data && data.user_id) {
    user_id = data.user_id
  } else {
    const user = await Factory.model('App/Models/User').create()
    user_id = user.id
  }

  return {
    nome: casual.full_name,
    cpf: generateCPF(),
    user_id
  }
})

Factory.blueprint('App/Models/Produto', () => {
  return {
    nome: casual.word,
    preco: parseFloat(casual.integer(10, 100).toFixed(2))
  }
})

Factory.blueprint('App/Models/Venda', async () => {
  const Cliente = use('App/Models/Cliente')
  const Produto = use('App/Models/Produto')
  
  const clientes = await Cliente.all()
  const produtos = await Produto.all()
  
  const cliente = clientes.rows[Math.floor(Math.random() * clientes.rows.length)]
  const produto = produtos.rows[Math.floor(Math.random() * produtos.rows.length)]
  
  const quantidade = casual.integer(1, 5)
  const preco_unitario = parseFloat(casual.integer(10, 100).toFixed(2))

  return {
    cliente_id: cliente ? cliente.id : null,
    produto_id: produto ? produto.id : null,
    quantidade,
    preco_unitario,
    preco_total: quantidade * preco_unitario,
    data: casual.date
  }
})

Factory.blueprint('App/Models/Endereco', async () => {
  const Cliente = use('App/Models/Cliente')
  const clientes = await Cliente.all()
  
  if (!clientes || clientes.rows.length === 0) {
    throw new Error('No clients found in the database. Please run ClienteSeeder first.')
  }
  
  const randomClient = clientes.rows[Math.floor(Math.random() * clientes.rows.length)]
  
  return {
    cliente_id: randomClient.id,
    logradouro: casual.street,
    numero: casual.integer(1, 999).toString(),
    bairro: casual.city,
    cidade: casual.city,
    estado: casual.state,
    cep: casual.zip(5)
  }
})

Factory.blueprint('App/Models/Telefone', async () => {
  const Cliente = use('App/Models/Cliente')
  const clientes = await Cliente.all()
  
  if (!clientes || clientes.rows.length === 0) {
    throw new Error('No clients found in the database. Please run ClienteSeeder first.')
  }
  
  const randomClient = clientes.rows[Math.floor(Math.random() * clientes.rows.length)]
  
  return {
    cliente_id: randomClient.id,
    numero: casual.phone
  }
})
