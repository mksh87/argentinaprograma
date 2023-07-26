
let jugadas =["tijeras","papel","piedra","lagarto","spock"];

console.log("\nBienvenido al juego de piedra-papel-tijeras! Competirás contra la computadora en una batalla sin igual.");
const readlineSync = require('readline-sync');


function obtenerJugadaUsuario(){
    let usuario;
    do{
    usuario =readlineSync.question('Ingresa tu opcion: pierda, papel o tijeras? --> ');
    usuario=usuario.toLowerCase();
        if(jugadas.indexOf(usuario)===-1){
            console.log(" Elegiste un valor inválido.\n Por favor selecciona piedra, papel o tijeras. Revisa ortografía.");
        }else {
            console.log(" >> Elegiste "+usuario.toUpperCase());
        }
    } while(jugadas.indexOf(usuario)===-1);
return usuario;
}

function obtenerJugadaComputadora() {
    let random = Math.floor(Math.random() * jugadas.length);
    let computadora=jugadas[random]
    console.log(" >> La computadora eligió "+computadora.toUpperCase());
return computadora;
}



obtenerJugadaUsuario()
obtenerJugadaComputadora()
