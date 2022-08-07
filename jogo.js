// alert('teste entendido')

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //obs1
    largura = window.innerWidth //obs1

    //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90 //obs2
    var posicaoY = Math.floor(Math.random() * altura) - 90 //obs2
    
    console.log(posicaoX, posicaoY)
    
    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'

    //definindo a classe padronizada em css
    mosquito.className = 'mosquito1'

    //definindo o posicionamento
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' //obs3

    //console.log(mosquito.style.left)
    document.body.appendChild(mosquito)
}




/**ob1 - capturando largura e algura com essas funçoes nativas */

/**obs2 - desta maneira evita-se o estouro do tamanho da pagina, sempre vai aparecer dentro dos limites da mesma. */

/**obs3 - muito importante essa difinicao de absolute senao nao vai funcionar. */