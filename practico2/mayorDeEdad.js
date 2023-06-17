const readlineSync = require('readline-sync');
let edad = readlineSync.question('Por favor ingresa tu edad: ');
let condicion=''
if(edad>=18){
    condicion='mayor'
    console.log('Eres %s de edad',condicion);
} else if(edad<18){
    condicion='menor'
    console.log('Eres %s de edad',condicion);
} else {
    console.log('El valor ingresado no tiene el formato correcto. Por favor intente nuevamente.')
}