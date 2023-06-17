let invitados=["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos=[];
let rechazados=[];
for (let i=0 ; i<invitados.length ; i++){
	if(invitados[i]==="Jose" || invitados[i]==="Sofia"){
		rechazados.push(invitados[i]);
	} else {
		admitidos.push(invitados[i]);
	}
}

//imprime lista de invitados antes de ordenar
console.log("La lista de invitados admitidos es:")
for (let i=0 ; i<admitidos.length ; i++){
	console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es:")
for (let i=0 ; i<rechazados.length ; i++){
	console.log(rechazados[i]);
}

//ciclo para ordenar las listas con el método de burbuja
function ordenarLista(lista) {
for(let i=1;i<=lista.length;i++){
	let aux="";
	for(let j=0;j<lista.length-1;j++){
		if(lista[j]>lista[j+1]){
			aux=lista[j];
			lista[j]=lista[j+1];
			lista[j+1]=aux;
		}
	}
}
}
//aplicamos función de ordenar a los arreglos
ordenarLista(admitidos);
ordenarLista(rechazados);

//imprime lista de invitados ordenados

console.log("La lista ordenada de invitados admitidos es:")
for (let i=0 ; i<admitidos.length ; i++){
	console.log(admitidos[i]);
}
console.log("La lista ordenada de invitados rechazados es:")
for (let i=0 ; i<rechazados.length ; i++){
	console.log(rechazados[i]);
}