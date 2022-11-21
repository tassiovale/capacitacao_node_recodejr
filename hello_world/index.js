/*
const numero = 3

if (numero % 2 === 0) {
    console.log('par')
} else {
    console.log('impar')
}

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

for (let numero_par = 0; numero_par <= 200; numero_par = numero_par + 2) {
    console.log(numero_par)
}

let numero_par = 0;
while (numero_par <= 200) {
    console.log(numero_par)
    numero_par = numero_par + 2
}

let numeros = [1, 12, 15, 18]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

numeros.forEach(numero => {
    console.log(numero)
})

function imprime_nome_pessoa (nome_pessoa) {
    console.log(nome_pessoa);
}

imprime_nome_pessoa('Tassio');

let numeros = [1, 12, 15, 18]
numeros.forEach(numero => {
    console.log(numero)
})

let numeros = [1, 12, 15, 18, 20]
numeros.forEach(numero => {
    console.log(numero)
})

const _ = require('lodash')

let numeros = [1, 12, 15, 18, 20]
_.forEach(
    numeros, 
    numero => {
        console.log(numero)
    }
)

const resultado = _.difference([2, 1], [2, 3])
console.log(resultado)

const { nome, rg, cpf, xpto } = dadosPessoais
console.log(nome)
console.log(rg)
console.log(cpf)

const { rua, numero } = dadosPessoais.endereco
console.log(rua)
console.log(numero)
*/

import _ from 'lodash'

const dadosPessoais = {
    nome: 'Tassio',
    rg: '321321113212',
    cpf: 321321123,
    endereco: {
        rua: 'Rua B',
        numero: 28
    }
}

const dadosAdicionais = {
    idade: 33,
    altura: 1.73
}

const dadosPessoaisCompleto = { 
    ...dadosPessoais, 
    ...dadosAdicionais,
    nomeMae: 'Geruza'
}
console.log(dadosPessoaisCompleto)