//Faça um programa que recebe a idade de uma pessoa em anos e
//imprima essa idade em: Meses, Dias, horas e minutos

//Algoritmo para calcular idade em meses, dias, horas e minutos

//idade em meses : multiplica a idade em anos por 12
//idade em dias : multiplica a idade em anos por 365
//idade em horas : idade em dias multiplicar por 24
//idade minutos : idade em horas multiplicada por 60

//entrada
let idade = 33;
console.log('A idade em anos é : ' + idade)

//processamento
let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idadeDias * 24
let idadeMinutos = idadeHoras * 60

//saida
console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)
console.log(idadeMinutos)
