// TONY JONAS DOS SANTOS SOUSA

let opcoesComida = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
}
/*
se >2x  - comida queimou
se <1x  - tempo insuficiente
opções não listadas  - prato inexistente
se >3x -  kabum
*/
microondas(macarrao, 50) 
let microondas = (comida, tempo) => { //arrow function
    if (opcoesComida.hasOwnProperty(comida)) {  //caso a comida escolhida esteja dentro do cardápio
        for (let prato in opcoesComida){  //loop pra entrar em cada propriedade do objeto (ex: retorna pipoca, macarrao, etc)
            switch (comida) {
                case prato:  // if comparando o que o usuário escreveu (comida) e a propriedade da iteração (prato)
                    if (tempo >= opcoesComida[prato]*3){
                        console.log("kabummm")
                    } else if (tempo > opcoesComida[prato]*2){
                        console.log("A comida queimouuu, faça outra comida")
                    } else if (tempo < opcoesComida[prato]){
                        console.log("Tempo insuficiente")
                    } else {
                        console.log("Prato pronto, bom apetite!!")
                    }
                    break;
            }
        }
    } else {  //caso a comida não tenha dentro do cardápio:
        console.log("Prato inválido. Digite um prato que exista dentro do menu.")
    }
}

// Testes
microondas('arroz', 37)
microondas('pipoca', 31)
microondas('pipoca', 11)
microondas('pipoca', 21)
microondas('pipoca', 24)