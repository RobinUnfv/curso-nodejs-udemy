
const fs = require('fs');

const crearArchivo = (base) => {

    return new Promise( (resolve, reject) => {
        let salida = '';

        for( let i = 0; i <= 12; i++ ){
            salida += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFileSync(`TABLA-${base}.txt`, salida);
        resolve(`TABLA-${base}.txt creada`);
    } );

}

const tablaMultiplicacion = async(base = 0, listar = false) => {
    try {
        let salida = '';
        for( let i = 0; i <= 12; i++ ){
            salida += `${base} * ${i} = ${base*i}\n`;
        }
        if(listar) {
            console.log(salida);
        }
        fs.writeFileSync(`TABLA-${base}.txt`, salida);
        // resolve(`TABLA-${base}.txt creada`);
        return `TABLA-${base}.txt`;
    }catch(err) {
        throw err;
    }
}

const tabla = async(base = 0, listar = false, hasta = 0) => {
     try{
        let salida = '';
        for( let i = 0; i <= hasta; i++ ){
            salida += `${base} * ${i} = ${base*i}\n`;
        }
        if(listar) {
            console.log(salida);
        }
        fs.writeFileSync(`./salida/TABLA-${base}.txt`, salida);
        return `TABLA-${base}.txt`;
     }catch(err) {
        throw err;
     }

}


module.exports = {
    crearArchivo,
    tablaMultiplicacion,
    tabla
}