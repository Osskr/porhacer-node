const fs = require('fs')

let listadoPorHacer = []

const guardarDb = () => {
    
    let data = JSON.stringify(listadoPorHacer)
    
    fs.writeFile('db/data.json', data, (err) =>{
        if(err) throw new Error('No se pudo crear el archivo')
    });
}


const cargarDb = ()=> {

    try {
        listadoPorHacer = require('../db/data.json')    
    } catch (error) {
        listadoPorHacer=[]
    }
    
}

const crear = (descripcion) => {

    cargarDb()
    const porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDb()
    return listadoPorHacer
}

const listarTareas = ()=>{
    cargarDb()
    return listadoPorHacer
}

const actualizar = (description, completado=true ) => {
    cargarDb()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === description)

    if(index>= 0 ){
        listadoPorHacer[index].completado = completado
        guardarDb()
        console.log(completado)
        return true
    } else{
        return false
    }

    
    
}

const borrar = (description) =>{

    cargarDb()
    listadoPorHacer = listadoPorHacer.filter((tarea) => description !== tarea.descripcion )
    guardarDb()
}
module.exports = {
    crear,
    listarTareas,
    actualizar,
    borrar
}