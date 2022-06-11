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
}


/* borda check bebidas */
function checkBoxB (elemento) {
    const bebidaClicado = document.querySelector(".bebidas .bordaCheck");

    if (bebidaClicado !== null) {
        bebidaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");
} 

/* borda check sobremesas */
function checkBoxS (elemento) {
    const sobremesaClicado = document.querySelector(".sobremesas .bordaCheck");

    if (sobremesaClicado !== null) {
        sobremesaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");
} 

/* botão fechar pedido */

