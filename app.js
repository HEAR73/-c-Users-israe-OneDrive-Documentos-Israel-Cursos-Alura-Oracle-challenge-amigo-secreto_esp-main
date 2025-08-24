// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres = [];

// FUNCIONES PRINCIPALES

function agregarAmigo() {
    nombre = document.getElementById('amigo').value.trim();
    nuevoNombre(nombre);
    //console.log(listaNombres); 
    return;   
}


function sortearAmigo() {
    nombreSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    //alert(`El amigo secreto sorteado es: ${nombreSorteado}`);
    asignarTextoElemento('p1',`El amigo secreto sorteado es: ${nombreSorteado}`);
    return;
}


// FUNCIONES SECUNDARIAS

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function nuevoNombre(nombre) {
    if (nombre === "") {
        alert("Ingrese un nombre valido");
        return;
    } else { 
        if (listaNombres.includes(nombre)) { 
            // Esta parte no esta pero me parece importante     
            alert("Ese nombre ya está en la lista.");
            limpiarCaja();
            return;
        } else {
            // Agrega Nombre 
            listaNombres.push(nombre);
            // Crea Lista con los nombre ingresados
            const li = document.createElement('li');
            li.textContent = nombre;
            document.getElementById('listaAmigos').appendChild(li);
        
            limpiarCaja();
            return;
        }
    }    
}

