
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
imprimirMenu()

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

function segundaOpcao(){
    let = ""
     mensagem += "///// Listagem de Doarores /////"
    prompt(mensagem)
}




function main{
    swith(listarDoadores){
        case 1:
            primeiraOpcao()
            break
        case 2:
            segundaOpcao()
            break
    }
}

main()