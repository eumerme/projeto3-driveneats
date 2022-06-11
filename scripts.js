function aviso () {
    alert ("Visualização mobile em 414px :)");
}
aviso();



/* borda check pratos */
function checkBoxP (elemento) {
    const pratoClicado = document.querySelector(".pratos .bordaCheck");

    if (pratoClicado !== null) {
        pratoClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");   

    pedido();
}


/* borda check bebidas */
function checkBoxB (elemento) {
    const bebidaClicado = document.querySelector(".bebidas .bordaCheck");

    if (bebidaClicado !== null) {
        bebidaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");

    pedido();
} 

/* borda check sobremesas */
function checkBoxS (elemento) {
    const sobremesaClicado = document.querySelector(".sobremesas .bordaCheck");

    if (sobremesaClicado !== null) {
        sobremesaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");

    pedido();    
} 

/* botão fechar pedido */
function pedido() {

    let pedidoAberto = document.querySelector(".barra-base .botao-3itens");
    let pedidoFechado = document.querySelector(".barra-base .fecharPedido");

    let pratoEscolhido = document.querySelector(".pratos .bordaCheck");
    let bebidaEscolhido = document.querySelector(".bebidas .bordaCheck");
    let sobremesaEscolhido = document.querySelector(".sobremesas .bordaCheck");

    if (pratoEscolhido && bebidaEscolhido && sobremesaEscolhido) { 
        pedidoAberto.classList.add("escondido");
        pedidoFechado.classList.remove("escondido");
    }
}