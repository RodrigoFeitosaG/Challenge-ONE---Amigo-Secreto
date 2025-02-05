// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos=[];
let amigoGlobal;

function adicionarAmigo(){
    capturarValor();    
}

function capturarValor(){
    amigoGlobal=document.getElementById('amigo').value;
    if (validarVazio(amigoGlobal) && validarNome(amigoGlobal)) {
        adicionarValor(amigoGlobal);
    }
}

function validarVazio(val){
    if (val=='') {
        alert('O campo não pode estar vazio');
        return false;
    }else {
        return true;
    }
}

function validarNome(val) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if (!regex.test(val)) {
        alert('O nome não pode conter números ou caracteres especiais');
        return false;
    }
    return true;
}

function adicionarValor(val){
    amigos.push(val);
    document.getElementById('amigo').value ="";
    atualizarLista();
}

function atualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        const novoElemento = document.createElement('li');
        novoElemento.textContent=amigos[i];
        lista.appendChild(novoElemento)
    }
}
/////////////////

function sortearAmigo(){
    let retval = validarArray();
    //alert(`Valor de RetVal= ${retval}`)
    if (retval==true){
        let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
        let nome = amigos[indiceAleatorio];
        //alert(`Índice gerado: ${indiceAleatorio}, para o amigo secreto ${nome}`);
        mostrarResultado(nome);
    };
}

function validarArray(){
    if (amigos.length==0) {
        alert('Não há amigos para realizar o sorteio');
        return false;
    }else{
        //alert(`A quantidade de amigos é ${amigos.length}`);
        return true;
    }
}

function mostrarResultado(val){
    //alert(`Mostrar resultado do Amigo Secreto: ${val}`);
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML="";
    listaResultado.innerHTML=val;
    //const novoElemento = document.createElement('li');
    //novoElemento.textContent=val;
    //listaResultado.appendChild(novoElemento)
}
