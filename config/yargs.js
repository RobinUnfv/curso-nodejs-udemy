const argv = require('yargs')
               .option('b', { alias: 'base', type: 'number', demandOption: true } )
               .option('l', { alias: 'listar', type: 'boolean', default: false } )
               .option('h', { alias: 'hasta', type: 'number', default: 0 } )
               .argv;
module.exports = argv;               