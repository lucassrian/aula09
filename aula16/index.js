/*let primeiroNumero
let segundoNumero
let resultado

//leitura de dados informados pelo usuario
primeiroNumero = prompt("Digite o primeiro número")
segundoNumero = prompt("Digite o segundo número") 

//Teste de comparação
resultado = primeiroNumero === segundoNumero
alert(resultado)

resultado = primeiroNumero !== segundoNumero
alert(resultado)

resultado = primeiroNumero < segundoNumero
alert(resultado)

resultado = primeiroNumero > segundoNumero
alert(resultado)*/

//Declaração de variavel 
/*let a
let b 
let c 
let resultado

//Leitura de dados informados oelo usuario
a = true
b = false 
c = true

//Teste de comparação
resultado = a && b
alert(resultado)

resultado = b && c 
alert(resultado)

resultado = a && b && c
alert(resultado)

resultado = a || b 
alert(resultado)

resultado = b || c
alert(resultado)

resultado = a || c
alert(resultado)

resutado = a || b || c 
alert(resultado)*/

let nome 
let anoNascimento 
let anoAtual
let idade
let maiorIdade
let idade2050

nome = prompt("Digite seu nome:")
anoNascimento = prompt("Digite o ano que você nasceu:")
anoAtual = prompt("Digite o ano atual:")

idade = anoAtual - anoNascimento
maiorIdade = idade >= 18
idade2050 = 2050 - anoNascimento

alert(nome)
alert(idade)
alert(maiorIdade)
alert(idade2050)