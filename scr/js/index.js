// pegar a seta para avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
// valor do cartão atual selecionado
let cartaoAtual = 0;
//criar uma constante para selecionar o proximo cartão
const cartoes = document.querySelectorAll('.cartao');

// ação de evento para mudar uma imagem
btnAvancar.addEventListener('click', function(){

    console.log(cartaoAtual);
    console.log(cartoes.length - 1);

    if (cartaoAtual === cartoes.length - 1) (cartaoAtual = cartaoAtual - 6);
    // selecionou o documento com a classe denominada entre ('')
    const cartaoSelecionado = document.querySelector('.selecionado');
    // apos isso remove a classe denominada entre ('')
    cartaoSelecionado.classList.remove('selecionado');

    

    //cartão atual mostrado na tela adiciona +1 e passa para o proximo da lista
    cartaoAtual++;
    //adiciona a classe entre ('') e mostra na tela o cartão
    cartoes[cartaoAtual].classList.add('selecionado');

});

btnVoltar.addEventListener('click', function(){

    console.log(cartaoAtual);
    console.log(cartoes.entries);

    if (cartaoAtual === 0) (cartaoAtual = 6)

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
})
 