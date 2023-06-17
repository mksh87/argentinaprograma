let nombres=[ "Carla","Pedro","Daiana","Ivan","Ivette","Mario","Vanesa"];
let apellidos=["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"];
let estadoInvitacion=[true,false,true,true,true,false,true,false];

/*En cada ej. gregué nuevos arreglos que almacenaran las respuestas.
En realidad no hacía falta porque el ejercicio no pide almacenar, solo imprimir por consola.
Pero no los quería borrar, así que los marco al costado con un NO HACE FALTA */


//filtro nombres que terminan con A
console.log("Ejercicio 2:");
let terminanConA=[]; //NO HACE FALTA
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].endsWith("a")){
        terminanConA.push(nombres[i]); //NO HACE FALTA
        console.log(nombres[i]);
    }
};

//filtro si nombre termina con A y apellido empieza con G
console.log("Ejercicio 4:");
let apellidosAG=[]; //NO HACE FALTA
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].endsWith("a")&& apellidos[i].charAt(0)==="G"){
        apellidosAG.push(nombres[i]+" "+apellidos[i]); //NO HACE FALTA
        console.log(nombres[i]+" "+apellidos[i]);
    }
};

//listado de invitados aprobados
console.log("Ejercicio 6:");
let invitadosAprobados=[];//NO HACE FALTA
for(let i=0;i<estadoInvitacion.length;i++) {
    if(estadoInvitacion[i]===true){
        invitadosAprobados.push(nombres[i].charAt(0)+". "+apellidos[i]); //NO HACE FALTA
        console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};

//listado de invitados aprobados con las condiciones de letras
invitadosAprobadosAG=[]; //NO HACE FALTA
console.log("Ejercicio 7:");
for(let i=0;i<nombres.length;i++) {
    if( nombres[i].endsWith("a")  &&
        apellidos[i].charAt(0)==="G" && 
        estadoInvitacion[i]){
            invitadosAprobadosAG.push(nombres[i].charAt(0)+". "+apellidos[i]); //NO HACE FALTA
            console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};


//ahora intentamos hacer todo junto
console.log("Ejercicio extra:");

let superArreglo=[nombres,apellidos,estadoInvitacion];

for(let i=0;i<superArreglo[0].length;i++) {
    if(superArreglo[0][i].endsWith("a") && 
    superArreglo[1][i].charAt(0)==="G" && 
    superArreglo[2][i]===true){
        console.log(superArreglo[0][i].charAt(0)+". "+superArreglo[1][i]);
    }
};

console.log("El nuevo arreglo tiene "+
            superArreglo.length +
            " arreglos y cada arreglo tiene "+
            superArreglo[0].length +
            " elementos. Entonces en total el arreglo tiene "+
            superArreglo.length*superArreglo[0].length +
            " elementos.");