const fs = require('fs');
    const { stringify } = require('querystring');
    let arreglo = [];


function leerArchivo(nombreArchivo) {
    let data = fs.readFileSync(nombreArchivo, 'utf8')


    const lineas = data.trim().split('\n');

    lineas.forEach((linea) => {
        const valores = linea.trim().split(' ');
        const año = parseInt(valores[0]);
        const mes = parseInt(valores[1]);
        const dia = parseInt(valores[2]);
        const tempMedia = parseInt(valores[3]);
        const tempMax = parseInt(valores[4]);
        const tempMin = parseInt(valores[5]);
        const presion = parseInt(valores[6]);
        const humedad = parseInt(valores[7]);
        const precipitacion = parseInt(valores[8]);

        if (!arreglo[año - 1980]) {
            arreglo[año - 1980] = [];
        }

        if (!arreglo[año - 1980][mes - 1]) {
            arreglo[año - 1980][mes - 1] = [];
        }

        arreglo[año - 1980][mes - 1][dia - 1] = {
            tempMedia,
            tempMax,
            tempMin,
            presion,
            humedad,
            precipitacion,
        };
    });
    return arreglo;
}

//console.log("Clima para el día "+(Number(dia)+1)+"/"+(Number(mes)+1)+"/"+(Number(año)+1980)+":");
//console.log(JSON.stringify(arreglo[1][1][1]));

function historicMinMax(){
leerArchivo('weather_cordoba.in');
let min=arreglo[0][0][0].tempMin;
let max=arreglo[0][0][0].tempMax;
for(i=0;i<arreglo.length;i++){
    for(j=0;j<arreglo[i].length;j++){
        for(k=0;k<arreglo[i][j].length;k++){
            if(min>arreglo[i][j][k].tempMin){
                min=arreglo[i][j][k].tempMin;
            } else if(max<arreglo[i][j][k].tempMax){
                max=arreglo[i][j][k].tempMax;
            }
        }
    }
}
return console.log("Mínimo histórico: "+min+" | Máximo histórico: "+max)
}

historicMinMax()

function yearMaxTemp(){
    leerArchivo('weather_cordoba.in');
    let maxAño=[];
    
    for(i=0;i<arreglo.length;i++){
        let maxTemp=arreglo[i][0][0].tempMax;
        for(j=0;j<arreglo[i].length;j++){
            for(k=0;k<arreglo[i][j].length;k++){
                if(maxTemp<arreglo[i][j][k].tempMax){
                    maxTemp=arreglo[i][j][k].tempMax;
                }
            }
        }
        maxAño.push(maxTemp);
    }
    return console.log("Las temperaturas máximas por año son:\n"+JSON.stringify(maxAño));
    }

    yearMaxTemp()

    function yearMaxRain(){
        leerArchivo('weather_cordoba.in');
        let yearMaxRain=[];
        
        for(i=0;i<arreglo.length;i++){
            let maxRain=arreglo[i][0][0].precipitacion;
            for(j=0;j<arreglo[i].length;j++){
                for(k=0;k<arreglo[i][j].length;k++){
                    if(maxRain<arreglo[i][j][k].precipitacion){
                        maxRain=arreglo[i][j][k].precipitacion;
                    }
                }
            }
            yearMaxRain.push(maxRain);
        }
        return console.log("Las precipitaciones máximas por año son:\n"+JSON.stringify(yearMaxRain));
        }
    
        yearMaxRain()

