nombres=[ "Carla","Pedro","Daiana","Ivan","Ivette","Mario","Vanesa"];
apellidos=["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"];
estadoInvitacion=[true,false,true,true,true,false,true,false];

//filtro nombres que terminan con A
console.log("Ejercicio 2:");
terminanConA=[];
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].endsWith("a")){
        terminanConA.push(nombres[i]);
        console.log(nombres[i]);
    }
};

//filtro si nombre termina con A y apellido empieza con G
console.log("Ejercicio 4:");
apellidosAG=[];
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].endsWith("a")&& apellidos[i].charAt(0)==="G"){
        apellidosAG.push(nombres[i]+" "+apellidos[i]);
        console.log(nombres[i]+" "+apellidos[i]);
    }
};

//listado de invitados aprobados
console.log("Ejercicio 6:");
invitadosAprobados=[];
for(let i=0;i<estadoInvitacion.length;i++) {
    if(estadoInvitacion[i]===true){
        invitadosAprobados.push(nombres[i].charAt(0)+". "+apellidos[i]);
        console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};

//listado de invitados aprobados con las condiciones de letras
invitadosAprobadosAG=[];
console.log("Ejercicio 7:");
for(let i=0;i<nombres.length;i++) {
    if(nombres[i].endsWith("a") && apellidos[i].charAt(0)==="G" && estadoInvitacion[i]===true){
        invitadosAprobadosAG.push(nombres[i].charAt(0)+". "+apellidos[i]);
        console.log(nombres[i].charAt(0)+". "+apellidos[i]);
    }
};


//ahora intentamos hacer todo junto
console.log("Ejercicio extra:");
superArreglo=[nombres,apellidos,estadoInvitacion];
for(let i=0;i<superArreglo[0].length;i++) {
    if(superArreglo[0][i].endsWith("a") && superArreglo[1][i].charAt(0)==="G" && superArreglo[2][i]===true){
        console.log(superArreglo[0][i].charAt(0)+". "+superArreglo[1][i]);
    }
};