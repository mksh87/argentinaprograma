let valores=[100,22,5454,34,546,-23,342,5,23,756,132,54,890,5700];
let min=valores[0];
let max=valores[0];
for(i=1; i<valores.length;i++){
    if(valores[i]<min){
        min=valores[i];
    } else if(valores[i]>max){
        max=valores[i];
    }
}
console.log("El valor más bajo es: "+min);
console.log("El valor más alto es: "+max);