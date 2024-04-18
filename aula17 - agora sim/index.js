//atividae1
let idade 
let idadeAmigo
let diferençaIdade

idade = prompt("Qual é a sua idade?")
idadeAmigo = prompt("Qual é a idade do seu amigo?")

resultado = idade >= idadeAmigo
alert(`Sua idade é maior que a do seu amigo? ${resultado}`)

diferençaIdade = idade - iadadeAmigo
alert(`A diferença de idade é ${diferençaIdade}`)

//atividade2
let numeroUm

numeroUm = prompt("Digite um numero par:")
console.log((numeroUm % 2) == 0)

//atividade3
let idadeAnos
idadeAnos = Number(prompt("Quantos anos você tem?"))
alert(idadeAnos *12)
alert(idadeAnos * 360)
alert(idadeAnos * 8786)

//atividade4
let num1 = Number(prompt("Digite um numero:"))
let num2 = Number(prompt("Digite outro numero;"))

resultado = num1 >= num2
alert(`O primeiro numero é maior que segundo? ${resultado}`)

resultado2 = num1 === num2
alert(`O primeiro numero é igual ao segundo?${resultado2}`)

resultado3 = (num1 % num2) == 0
alert(`O primeiro numero é divisível pelo segundo?${resultado3}`)

resultado4 = (num2 % num1) == 0
alert(`O segundo numero é divisível pelo primeiro?${resultado4}`)