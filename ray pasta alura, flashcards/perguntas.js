function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
criaCartao(
    'Aleatório',
    'Quem foi o primeiro presidente do Brasil?',
    'Marechal Deodoro da Fonseca'
)

criaCartao(
    'Aleatório',
    'Em que ano ocorreu a independência do Brasil?',
    '1822.'

)

criaCartao(
    'Aleatório',
    'Qual é a capital da França?',
    'Paris'
)

criaCartao(
    'Aleatório',
    'Qual é o maior oceano do planeta?',
    'Oceano Pacífico.'
)

criaCartao(
    'Aleatório',
    'Qual país tem a maior população do mundo?',
    'China'

)

criaCartao(
    'Aleatório',
    'Qual é a fórmula da água?',
    'H₂O.'
)

criaCartao(
    'Aleatório',
    'O que é um verbo?',
    'É uma palavra que indica ação, estado ou fenômeno da natureza.'
)

criaCartao(
    'Aleatório',
    'Qual a função de um adjetivo?',
    'O adjetivo qualifica ou caracteriza o substantivo, atribuindo-lhe uma qualidade.'

)

criaCartao(
    'Aleatório',
    'Qual é o maior país do mundo em extensão territorial?',
    'Rússia.'
)