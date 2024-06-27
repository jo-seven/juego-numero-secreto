
//se reduce esto a una funcion: asignarTextoElemento
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
let parrafo = document.querySelector('p')
parrafo.innerHTML = 'Escoge un número del 1 al 10'; 
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
//creando funcion reutilizable pidiendo dos variables: elemento y texto.
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion del boton intentar con funcion getElementById, asignando un id al input
function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);*/
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){ //=== valida que sea el mismo tipo y que sea igual
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        //quita la propiedad de boton limpiar juego si acierta:
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; //retorna true o false
}

function limpiarCaja(){
   // let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = '';
   //mas reduciodo que lo anterior:
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        // si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //llamando la funcion cuando se requiere:
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números - Generar número aleatorio - Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
