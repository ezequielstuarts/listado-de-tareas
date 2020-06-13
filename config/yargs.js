const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea.'
};

const completado = {
    default: false,
    alias: 'c',
    desc: 'Marca como compleato o pendiente la tarea.'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por realizar', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}