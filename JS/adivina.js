//Creamos variable titulo, llamamos a lo que tiene la etiqueta
//hi con el query selector

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0; //generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);

//Para evitar definir funciones una por una, como el caso de las dos anteriores, podemos hacer una funcion
//general que tenga como parámetros el elemento a llamar y lo que aparece en pantalla
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    //Se reemplaza por los parámetros generales
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario==numeroSecreto); */
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos=== 1) ? 'intento' : 'intentos'} `); //Funciona como un if
        document.getElementById('reiniciar').removeAttribute('disabled'); //Cambia el color del botón inactivo
   
    } else{
        //El ususario no acertó, ponemos función que limpie
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = (después e esto iba el query selector pero para reducir podremos igualar incluyendo al final .value='')
    document.querySelector('#valorUsuario').value =''; //ID del input
    //valorCaja.value='';
}

function generarNumeroSecreto() {

    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //Math.floor retorna solo la parte decimal
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos lo números posibles')
    } else{
        //Si el número generado está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); 
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //Llamamos a la función general con parámetros
    asignarTextoElemento('h2', 'Juego del número secreto');
    asignarTextoElemento('p',  `Indique un número entre 1 y ${numeroMaximo}`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio de intervalo de números
    condicionesIniciales();
    //Deshabilitar el botón
    //Inicializar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();