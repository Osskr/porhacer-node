const fs = require('fs')

const listadoPorHacer = []

const crear = (descripcion) => {

    const porHacer = {

        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    return porHacer
}

module.exports = {
    crear
}