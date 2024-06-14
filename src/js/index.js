setTimeout(function() {
    alert('Seja Bem-Vindo');
    }, 1000);

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes= document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    if (cartaoAtual === cartoes.length - 1) {
        // Se for o último cartão, volte para o primeiro cartão
        cartaoSelecionado.classList.remove("selecionado");
        cartaoAtual = 0;
    } else {
        // Caso contrário, vá para o próximo cartão
        cartaoSelecionado.classList.remove("selecionado");
        cartaoAtual++;
    }
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", function () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    if (cartaoAtual === 0) {
        // Se for o primeiro cartão, vá para o último cartão
        cartaoSelecionado.classList.remove("selecionado");
        cartaoAtual = cartoes.length - 1;
    } else {
        // Caso contrário, vá para o cartão anterior
        cartaoSelecionado.classList.remove("selecionado");
        cartaoAtual--;
    }
    cartoes[cartaoAtual].classList.add("selecionado");
});
