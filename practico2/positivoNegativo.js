const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question('Por favor ingrese un numero. El que usted quiera: '));
let condicion=''
switch (true) {
    case numero>0:
        condicion='positivo';
      break;
      case numero<0:
        condicion='negativo';
      break;
      case numero===0:
        condicion='cero';
      break;
      default:
        console.log('Por favor lea atentamente las instrucciones.');
        condicion='incorrecto. Intente nuevamente.'
  }
console.log('El número es %s',condicion);