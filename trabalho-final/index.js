function imprimirMenu(){
    let mensagem = ""
     mensagem+= "//// Sistema De Cadastro De Doadores De Sangue //// \n"
     mensagem+= "1. Cadastrar Doador \n"
     mensagem+= "2. Listar Doadores \n"
     mensagem+= "3. Buscar Doador por Data da Última Doação \n"
     mensagem+= "5. Sair \n"
     mensagem+=  "Escoha Uma Opção: \n"
    
     

    prompt(mensagem)

     return opcao 
}

imprimirMenu()