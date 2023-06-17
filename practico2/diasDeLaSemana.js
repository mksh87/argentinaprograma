const readlineSync = require('readline-sync');
let valor = Number( readlineSync.question('Por favor ingrese un valor del 1 al 7: '));
let dia=''
//chequear que el valor esté entre 1 y 7 y chequear que sea un número entero
if(!(valor>=1 && valor<=7 && valor%1===0)){
  console.log('Numero invalido');
} else{
switch (valor) {
    case 1:
      dia='lunes';
      break;
    case 2:
      dia='martes';
      break;
    case 3:
      dia='miercoles';
      break;
     case 4:
      dia='jueves';
      break;
    case 5:
      dia='viernes';
      break;
    case 6:
      dia='sabado';
      break;
    case 7:
      dia='domingo';
      break;
    default:
      console.log('Numero invalido2'); //repetir por las dudas se me escape algún otro caso.
  }
console.log('Hoy es %s',dia);
}