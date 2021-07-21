const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = toDo.crearTarea(argv.desc);
        console.log(tarea);
        break;
    case 'list':        
        let listado = toDo.listarTareas(argv.complete);
        console.log('==========Por Hacer=========='.green);
        for (const tarea of listado) {
            
            console.log(tarea.desc);
            console.log('Completada: ', tarea.complete);
            console.log('======================='.green);
        }        

        break;
    case 'update':
        let updateTarea =  toDo.updateTarea(argv.desc ,argv.complete);
        if (updateTarea) {
            console.log('Actualizado con exito');
        } else {
            console.log('No se pudo actualizar');
        }
        break;

    case 'delete':
        let deleteTarea = toDo.eliminarTarea(argv.desc);
        if (deleteTarea) {
            console.log('Tarea eliminada');            
        } else {
            console.log('No se pudo eliminar la tarea');
            
        }
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
