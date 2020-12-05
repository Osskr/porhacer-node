const opts = {
    create: {

        descripcion: {
            alias: '-d',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        }

    },

    update: {

        descripcion: {
            alias: '-d',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        },

        completado: {
            alias: '-c',
            default: false,
            desc: 'Indica si la tarea esta completada'
        }

    }

}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts.create)
    .command('actualizar', 'Actualiza el estado  completado de una tarea', opts.update)
    .help()
    .argv

module.exports = {
    argv
}