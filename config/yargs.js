const desc = {
    demand: true,
    alias: 'd'
}

const complete = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('create', 'Crear una tarea', {
        desc
    })
    .command('delete', 'Eliminar una tarea', {
        desc
    })
    .command('list', 'Listar las tareas por hacer', {
        complete: {
            demand: false,
            alias: 'c',          
        }               
    })
    .command('update', 'Actualizar una tarea', {
        desc,
        complete
    })
    .help()
    .argv;

module.exports = {
    argv
}