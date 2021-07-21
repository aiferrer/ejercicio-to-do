
const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar', err);

    });
}

const cargarDB = () => {

    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }

    //console.log(listadoToDo);
}

let buscarTarea = (desc) => {
    cargarDB();
    let index = listadoToDo.findIndex(tarea => tarea.desc === desc);
    if (index >= 0) {
        return listadoToDo[index]
    } else return false;
}

let crearTarea = (desc) => {

    cargarDB();

    let tarea = {
        desc,
        complete: false
    };

    listadoToDo.push(tarea);

    guardarDB();

    return tarea;
}

let listarTareas = (estado) => {
    cargarDB();
    console.log(estado);

    if(estado){        
        let listadoPorEstado = listadoToDo.filter(tarea => tarea.complete === estado );     
        return listadoPorEstado;
    }else return listadoToDo;
}

let updateTarea = (desc, estado = true) => {

    let tarea = buscarTarea(desc);

     if (tarea) {
        tarea.complete = estado;
        guardarDB();
        return true;
    } else return false;

}

let eliminarTarea = (desc) => {

   cargarDB();
    let nuevoListado = listadoToDo.filter(tarea => tarea.desc !== desc);
    

    if (listadoToDo.length === nuevoListado.length ) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crearTarea,
    listarTareas,
    updateTarea,
    eliminarTarea
}