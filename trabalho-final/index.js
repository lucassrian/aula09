
let usuario = []

function imprimirMenu(){
    let mensagem = ""
     mensagem+= "//// Sistema De Cadastro De Doadores De Sangue //// \n"
     mensagem+= "1. Cadastrar Doador \n"
     mensagem+= "2. Listar Doadores \n"
     mensagem+= "3. Buscar Doador por Data da Última Doação \n"
     mensagem+= "5. Sair \n"
     mensagem+=  "Escoha Uma Opção: \n"
    
     

    prompt(mensagem)

    
}

function primeiraOpcao(){
    let nome = prompt("Digite o seu nome:")
    let idade = prompt("digite a sua idade:")
    let peso = prompt("Digete o seu peso:")
    let sangue = prompt("Digete o seu tipo sanguíneo:")
    let data = prompt("Digite a data da sua última doação:")
     usurio.push({ nome,idade,peso,sangue,data } )
     alert("Parabéns, você está cadastrado!! ")
     let = ""
     mensagem += "///// Listagem de Doarores"

}


imprimirMenu()
primeiraOpcao()
segunda


