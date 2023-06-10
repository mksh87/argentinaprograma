nombres=[ "Carla","Pedro","Daiana","Ivan","Ivette","Mario","Vanesa"];
terminanConA=[];
console.log("Ejercicio 2:");
//filtro nombres que terminan con A
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].charAt(nombres[i].length-1)==="a"){
        terminanConA.push(nombres[i]);
        console.log(nombres[i]);
    }
};

apellidos=["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"];
apellidosAG=[];
console.log("Ejercicio 4:");
//filtro si nombre termina con A y apellido empieza con G
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].charAt(nombres[i].length-1)==="a" && apellidos[i].charAt(0)==="G"){
        apellidosAG.push(nombres[i]+" "+apellidos[i]);
        console.log(nombres[i]+" "+apellidos[i]);
    }
};

estadoInvitacion=[true,false,true,true,true,false,true,false];
invitadosAprobados=[]
console.log("Ejercicio 6:");
//listado de invitados aprobados
for(let i=0;i<estadoInvitacion.length;i++) {
    if(estadoInvitacion[i]===true){
        invitadosAprobados.push(nombres[i].charAt(0)+". "+apellidos[i]);
        console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};

invitadosAprobadosAG=[];
//listado de invitados aprobados con las condiciones de letras
console.log("Ejercicio 7:");
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].charAt(nombres[i].length-1)==="a" && apellidos[i].charAt(0)==="G" && estadoInvitacion[i]===true){
        invitadosAprobadosAG.push(nombres[i].charAt(0)+". "+apellidos[i]);
        console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};


//ahora intentamos hacer todo junto
console.log("Ejercicio extra:");
superArreglo=[nombres,apellidos,estadoInvitacion];
for(let i=0;i<superArreglo[0].length;i++) {
    if(superArreglo[0][i].charAt(superArreglo[0][i].length-1)==="a" && superArreglo[1][i].charAt(0)==="G" && superArreglo[2][i]===true){
        console.log(superArreglo[0][i].charAt(0)+". "+superArreglo[1][i]);
    }
};