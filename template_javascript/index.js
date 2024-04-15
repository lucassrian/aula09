//const primeiroNome = "Lucas"
//const segundoNome = "Sousa"
//const idadeNumero = 16
//const serEstudante = "Sim"
//let nome
//let idade
//console.log(typeof nome)
//É indefinido porque o let não tem definição
//console.log("Qual o seu nome" ,nome, "qual é a sua idade" , idade ,)
//recebeu as variaveis 
let nome = prompt("Digite seu nome: ")
let idade = prompt("Digite sua idade: ")
// MENSAGEM: digite as hras que você trabalha por dia :
let horasTrabalho = prompt("Digite as horas que você trabalha por dia: ")
let salarioDia = prompt("Digite o salário diário: ")
//Verificando variáveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//convertendo o que é necessário
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//Processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
//conversão para não dar erro de NULL
let valorHora = String(valHoraNumber)
const mensagem = "Seu valor hora e " + valorHora + "!!!"
//Verificando variáveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saída de valores para front end
alert(mensagem)