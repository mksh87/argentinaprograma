//No me gusta la idea de un if anidado, pero el enunciado y la bifurcación que propone cuando es par, apuntaban a hacerlo así.
const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question('Por favor ingrese un numero entero. El que usted quiera: '));
if (numero>0 /*&& numero%1===0*/){
    if(numero%2===0){
    console.log('El numero es positivo y par')
    } else {
    console.log('El numero es positivo e impar')
    }
} else if (numero<0){
    console.log('El numero es negativo');
} else if (numero===0){
    console.log('El numero es cero');
} else {
    console.log('Usted debe ingresar un valor con un formato adecuado');
}