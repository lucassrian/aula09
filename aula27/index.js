

/*function imprimirNome(nome, nome2, nome3 ){
    nome = prompt("digite um nome:")
    nome2 = prompt("digite um sugundo nome:")
    nome3 = prompt("digite um  terceiro nome:")
    
    
    console.log(`${nome} ${nome2} ${nome3}`)
}
imprimirNome()


function imprimirMenu(){
    let mensagem
     mensagem+= 
     mensagem+=
     mensagem+=
     mensagem+=
     mensagem+=
     mensagem+=
     mensagem+=
     mensagem+=
     mensagem+=
     
}*/

/*const professor = {
    nome: "josé",
    idade: 27,
    email: 'jose@gmail.com'
}
console.log(professor.email)

/*const professor = {
    nome: "josé",
    idade: 27,
    email: 'jose@gmail.com'
}
console.log(professor["email"])*/

const filme = {
    filme: "Close",
    direção: "Lukas Dhont",
    lançamento: "2 de março de 2023 (Brasil)",
    elenco: ["Eden Dambrine", "Gustav De Waele", "Émilie Dequenne", "Léa Drucker", "Kevin Janssens", "Marc Weiss", "Igor van Dessel", "Léon Bataille",],
    jaAssisti: "já assisti",
}

console.log(filme.filme)
console.log(filme.direção)
console.log(filme.lançamento)
console.log(filme.elenco)
console.log(filme.visto)
let mensagem = ""
for(let i = 0; i <= 7; i++){
    mensagem = mensagem + filme.elenco[i] + "\n"

}
console.log(mensagem)

filme.personagem = ["Léo", "Rémi", "Sophie", "Nathalie", "Peter", "Yves", "Charlie", "Baptiste"]

let personagem = ""
for(let i = 0; i <= 7; i++){
    personagem = personagem + filme.personagem[i] + " = " + filme.personagem[i] + "\n"
}
console.log(personagem)

/*const pessoa = {
    nome: "Carlos",
    idade: 49,
    genMusical: "MPB",

}
console.log("O nome da pessoa é " + pessoa.nome + " ele tem " + pessoa.idade + " anos e gosta muito de " + pessoa.genMusical)*/

