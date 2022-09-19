// alert('teste entendido')

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500 //obs7

var nivel = window.location.search //obs6
//alert(nivel.replace('?', ''))
nivel = nivel.replace('?', '')

if(nivel === 'normal'){

    criaMosquitoTempo = 1500

} else if(nivel === 'dificil'){
    
    criaMosquitoTempo = 1000

} else if(nivel === 'chucknorris'){

    criaMosquitoTempo = 750

}
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //obs1
    largura = window.innerWidth //obs1

    //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(() => {
    tempo -= 1

    if(tempo < 0){ //caso o usuario vença
        clearInterval(cronometro) //elimina a funcao da memoria da aplicacao
        clearInterval(criaMosca) //mesmo do de cima, criaMosca foi declarado no app.html
        //alert('vitoria')
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

function posicaoRandomica(){
    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas>3){
            //alert('interromper o jogo')
            window.location.href = 'fim_do_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = '/img/coracao_vazio.png'
            vidas++
        }

       
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //obs2
    var posicaoY = Math.floor(Math.random() * altura) - 90 //obs2
    
    //controle para que a posição nao seja menor que zero
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY 
    
    console.log(posicaoX, posicaoY)
    
    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'

    //definindo a classe padronizada em css
    //mosquito.className = 'mosquito1'
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
    //definindo o posicionamento
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' //obs3
    mosquito.id = 'mosquito' //obs5
    mosquito.onclick = function(){
        //alert('elemento clicado a tempo')
        this.remove()
    }

    //console.log(mosquito.style.left)
    document.body.appendChild(mosquito)

    //console.log(tamanhoAleatorio())
    //console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }   
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2) //obs4

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

/**sugestao: por os mosquitos com tempo ilimitado numa posicao e depois eles mudarem. Ja estava previso isso acontecer no projeto e eu nao sabia */

/**sugestao: colocar pontuacao somatoria para cada vez que acertar o mosquito */

/**sugestao: escolha de cenario do jogo */

/**ob1 - capturando largura e algura com essas funçoes nativas */

/**obs2 - desta maneira evita-se o estouro do tamanho da pagina, sempre vai aparecer dentro dos limites da mesma. */

/**obs3 - muito importante essa difinicao de absolute senao nao vai funcionar. */

/**obs 4 - como o random gera numeros de 0 a 1, essa multiplicação por 2 é para o arredondamento gerar números até no máximo o valor 2, inteiros. */

/**obs5 - criado para depois executar a remocao do mosquito criado anteriormente */

/**obs6 - retorna os dados de parametro do endereco apartir da ? */

/**obs7 - variavel criada depois para determinar o tempo ou nivel de dificuldade da velocidade de criacao do mosquito. Valor em milisseguntos 1000 = 1s */