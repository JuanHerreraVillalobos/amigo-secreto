// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Declaracion de variables.
let resultados = document.getElementById("resultado");
let entradaAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById('listaAmigos');

//Funcion para aagregar amigos y mensaje por casilla vacía- 
function agregarAmigo() {
    let nombreDeAmigo = entradaAmigo.value;
 
    if(!nombreDeAmigo){
        alert("Ingrese un nombre al listado, por favor.");
        return;
    } else {
        if (amigos.includes(nombreDeAmigo)){
            alert(`Ya añadiste a ${nombreDeAmigo} a la lista, escriba otro nombre.`);
            return;
        } else {
            amigos.push(nombreDeAmigo);
            entradaAmigo.focus();
            asignarTexto();
        } 
    limpiarCaja();
    }
    
}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo').value = '';
}

//Incluir a lista visual
function asignarTexto() {
    listaAmigos.innerHTML = "";

    for (let i=0; i<amigos.length; i++){
        let nombreNuevo = document.createElement("li");
        nombreNuevo.textContent = amigos[i];
        listaAmigos.appendChild(nombreNuevo);
    }
}

//Funcion para sortear amigo y desplegarlo en la pantalla
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía.');
        return;
    } else {
        let nombreAleatorio = amigos[Math.floor(Math.random()*amigos.length)];
        resultados.innerHTML = `Tu amigo sorteado es ${nombreAleatorio}`
    }
}
