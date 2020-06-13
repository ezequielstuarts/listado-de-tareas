// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./pendientes/pendientes');
const colors = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======= Tareas Pendientes ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        let list = porHacer.getListado();

        for (let tarea of list) {
            console.log('======= Tareas Pendientes ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================='.green);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'completadas':
        let comple = porHacer.getCompletadas();

        for (let tarea of comple) {
            console.log('======= Tareas Pendientes ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================='.green);
        }
        break;

    default:
        console.log('Este comando no es reocnocido.');
}