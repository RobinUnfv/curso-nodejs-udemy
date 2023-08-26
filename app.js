const { options } = require('yargs');
const { crearArchivo, tablaMultiplicacion, tabla } = require('./operaciones/multiplicar');
const argv = require('./config/yargs');


console.clear();

console.log(argv);

tabla(argv.b, argv.l, argv.h)
  .then( resp => console.log(resp, 'CREADO !!') )
  .catch(err => console.error(err));

/*
tablaMultiplicacion(argv.b, argv.l)
  .then( resp => console.log(resp, 'CREADA !!!...') )
  .catch( err => console.log(err) );
*/
/*
crearArchivo(base).then( nombreArchivo => console.log(nombreArchivo, 'creado') )
                 .catch( err => console.log(err) );
*/
