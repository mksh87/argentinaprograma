const readlineSync = require('readline-sync');
let valor = Number( readlineSync.question('Por favor ingrese un valor del 1 al 12: '));
if(!(valor >=1 && valor<=12 && valor%1===0)){
    console.log('El valor ingresado no es un valor entre 1 y 12. Por favor intente nuevamente.');
}else{
    let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    let diasMes=[31,28,31,30,31,30,31,31,30,31,30,31];
    let mes=meses[valor-1];
    let dias=diasMes[valor-1];
    console.log('La cantidad de dias del mes de %s es %i',mes,dias);
}