/*selecionar pratos */
function checkBoxP (elemento) {
    const pratoClicado = document.querySelector(".pratos .bordaCheck");

    if (pratoClicado !== null) {
        pratoClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");   

    pedido();
}

function ionCheckP (elemento){    
    const iconeCheck = elemento.querySelector(".pratos .icone-ionicon");
    const check = document.querySelector(".pratos .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
}


/* selecionar bebidas */
function checkBoxB (elemento) {
    const bebidaClicado = document.querySelector(".bebidas .bordaCheck");

    if (bebidaClicado !== null) {
        bebidaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");

    pedido();
} 

function ionCheckB (elemento){    
    const iconeCheck = elemento.querySelector(".bebidas .icone-ionicon");
    const check = document.querySelector(".bebidas .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
}

/* slecionar sobremesas */
function checkBoxS (elemento) {
    const sobremesaClicado = document.querySelector(".sobremesas .bordaCheck");

    if (sobremesaClicado !== null) {
        sobremesaClicado.classList.remove("bordaCheck");
    }

    elemento.classList.add("bordaCheck");

    pedido();    
} 

function ionCheckS(elemento){    
    const iconeCheck = elemento.querySelector(".sobremesas .icone-ionicon");
    const check = document.querySelector(".sobremesas .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
}    

/* botão fechar pedido */
function pedido() {
    const pratoEscolhido = document.querySelector(".pratos .bordaCheck");
    const bebidaEscolhida = document.querySelector(".bebidas .bordaCheck");
    const sobremesaEscolhida = document.querySelector(".sobremesas .bordaCheck");

    const botao3itens = document.querySelector(".barra-base .botao-3itens");
    const botaoFecharPedido = document.querySelector(".barra-base .fecharPedido");

    if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) { 
        botaoFecharPedido.classList.remove("escondido");
        botao3itens.classList.add("escondido");
    }
}

//alterar nomessss 

function msgWpp(){

    const msg = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70`;
    const enviarMsg = `https://wa.me/5524988235658?text=${encodeURIComponent(msg)}`;
    window.open(enviarMsg);
    
}