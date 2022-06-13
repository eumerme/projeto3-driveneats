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


/* Tudo certo, pode pedir */
function confirmePedido() {
    const botaoFecharPedido = document.querySelector(".barra-base .fecharPedido");
    const containerOpaco = document.querySelector(".container-opaco");

    if (botaoFecharPedido !== null){
        containerOpaco.classList.remove("escondido");

        //comida selecionada 
        const tituloComida = document.querySelector(".pratos .bordaCheck .menu-infos h2").innerHTML; 
        document.querySelector(".box-comida .item-escolhido").innerHTML = `${tituloComida}`;
        const precoComida = document.querySelector(".pratos .bordaCheck .menu-infos p").innerHTML;
        document.querySelector(".box-comida .preco").innerHTML = `${precoComida}`;

        //bebida selecionada 
        const tituloBebida = document.querySelector(".bebidas .bordaCheck .menu-infos h2").innerHTML; 
        document.querySelector(".box-bebida .item-escolhido").innerHTML = `${tituloBebida}`;
        const precoBebida = document.querySelector(".bebidas .bordaCheck .menu-infos p").innerHTML;
        document.querySelector(".box-bebida .preco").innerHTML = `${precoBebida}`;

        //sobremesa selecionada 
        const tituloSobremesa = document.querySelector(".sobremesas .bordaCheck .menu-infos h2").innerHTML; 
        document.querySelector(".box-sobremesa .item-escolhido").innerHTML = `${tituloSobremesa}`;
        const precoSobremesa = document.querySelector(".sobremesas .bordaCheck .menu-infos p").innerHTML;
        document.querySelector(".box-sobremesa .preco").innerHTML = `${precoSobremesa}`;

        //total
        const valorComida = Number((precoComida).replace("R$","").replace(",","."));
        const valorBebida = Number((precoBebida).replace("R$","").replace(",","."));
        const valorSobremesa = Number((precoSobremesa).replace("R$","").replace(",","."));
        const total = (valorComida + valorBebida + valorSobremesa).toFixed(2).replace(".",",");
        document.querySelector(".box-total .preco-total").innerHTML = `R$ ${total}`;
    }
}


/* Enviar mensagem whatsapp */
function msgWpp(){    
    //comida selecionada 
    const tituloComida = document.querySelector(".pratos .bordaCheck .menu-infos h2").innerHTML; 
    document.querySelector(".box-comida .item-escolhido").innerHTML = `${tituloComida}`;
    const precoComida = document.querySelector(".pratos .bordaCheck .menu-infos p").innerHTML;
    document.querySelector(".box-comida .preco").innerHTML = `${precoComida}`;

    //bebida selecionada 
    const tituloBebida = document.querySelector(".bebidas .bordaCheck .menu-infos h2").innerHTML; 
    document.querySelector(".box-bebida .item-escolhido").innerHTML = `${tituloBebida}`;
    const precoBebida = document.querySelector(".bebidas .bordaCheck .menu-infos p").innerHTML;
    document.querySelector(".box-bebida .preco").innerHTML = `${precoBebida}`;

    //sobremesa selecionada 
    const tituloSobremesa = document.querySelector(".sobremesas .bordaCheck .menu-infos h2").innerHTML; 
    document.querySelector(".box-sobremesa .item-escolhido").innerHTML = `${tituloSobremesa}`;
    const precoSobremesa = document.querySelector(".sobremesas .bordaCheck .menu-infos p").innerHTML;
    document.querySelector(".box-sobremesa .preco").innerHTML = `${precoSobremesa}`;

    //total
    const valorComida = Number((precoComida).replace("R$","").replace(",","."));
    const valorBebida = Number((precoBebida).replace("R$","").replace(",","."));
    const valorSobremesa = Number((precoSobremesa).replace("R$","").replace(",","."));
    const total = (valorComida + valorBebida + valorSobremesa).toFixed(2).replace(".",",");
    document.querySelector(".box-total .preco-total").innerHTML = `R$ ${total}`;

    const nome = prompt("Digite seu nome: ");
    const endereco = prompt("Digite seu endereço: ");

    const msg = `Olá, gostaria de fazer o pedido:\n- Prato: ${tituloComida}\n- Bebida: ${tituloBebida}\n- Sobremesa: ${tituloSobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    const enviarMsg = `https://wa.me/5524988235658?text=${encodeURIComponent(msg)}`;
    window.open(enviarMsg);    
}


/* Cancelar */
function cancelePedido() {
    const containerOpaco = document.querySelector(".container-opaco");
    containerOpaco.classList.add("escondido");
}