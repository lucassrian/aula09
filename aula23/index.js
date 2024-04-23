
/*const listaComida = ["Churrasco", "Sorvete", "Pastel", "Lasanha", "Bolo"]
console.log(listaComida)
console.log("Essas são as minhas comidas peferidas:" + "\n" + listaComida[0] + "\n" + listaComida[1]+ "\n" + listaComida[2]+ "\n" + listaComida[3]+ "\n" + listaComida[4])

const comida1 = prompt("E qual é a sua comida favorita?")
alert("Essas são as minhas comidas peferidas:" + "\n" + comida1 + "\n" + listaComida[1]+ "\n" + listaComida[2]+ "\n" + listaComida[3]+ "\n" + listaComida[4])*/



/*let listaDeTarefas  =  array
let  tarefasUsuario  =  prompt ( "Digite uma tarefa que você precisa realizar no dia de hoje: " )
    listaDeTarefas.push ( tarefasUsuario )
    console.log ( listaDeTarefas )
    
    tarefasUsuario  =  prompt( "Digite uma tarefa que você precisa realizar no dia de hoje: " )
    listaDeTarefas.push ( tarefasUsuario )
    console.log( listaDeTarefas )
    
    tarefasUsuario  =  prompt( "Digite uma tarefa que você precisa realizar no dia de hoje: " )
    listaDeTarefas.push( tarefasUsuario )
    console.log( listaDeTarefas )
let  índiceUsuario  =  prompt ( "Digite o índice de uma tarefa que já realizou: " )
listaDeTarefas.emenda( índiceUsuario , 1 )
console.log( listaDeTarefas )*/

/*let nomeUsuario = prompt("Digite sou nome de usuário:")
let nomeEmail = prompt("Digite o seu email:")
alert(`O e-mail ${nomeEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario} !`)*/

/*let num1 = prompt("Digite um número:")
let num2 = prompt("Digite um segundo número:")

if(num1 === num2){
alert("Parábens os números são iguais!!!")
}else{
    alert("Os números não são iguais -_-")
}
if(num1 >= num2){
    alert("O primeiro número é maior que o segundo número ")
}else{
    
}
if(num1 <= num2){
    alert("O primeiro número é menor que o segundo número")
}*/

let primeiroPokemon = prompt("Escolha u dos três pokemons")
switch(primeiroPokemon){
    case 'Bulbasaur':
        console.log('Plata e Veneno')
        break
    case 'charmander':
        console.log('Fogo')
        break
    case 'Squirtle':
        console.log('Água')   
        break
    default:
        console.log('Só os iniciais -_-')
        break
}