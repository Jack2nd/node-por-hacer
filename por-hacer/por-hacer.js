const fs = require('fs');

let listadoPorHacer = [];
let pathDataFile = "../db/data.json";


const cargarDB = () => {

    try {
        listadoPorHacer = require(pathDataFile);
    } catch (error) {
        listadoPorHacer = []
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json", data, (err) => {
        if (err)
            console.log(err);
        else console.log("Archivo creado con exito");
    })
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index < 0) {
        return false;
    } else {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index < 0) {
        return false;
    } else {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}