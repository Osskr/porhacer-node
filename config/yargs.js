const descripcion = 
    {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    }


const opts = {
    create: {
        descripcion: descripcion
    },

    update: {

        descripcion:descripcion,

        completado: {
            alias: 'c',
            default: false,
            desc: 'Indica si la tarea esta completada'
        }
    },
        borrar: {

            descripcion:descripcion
      }

}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts.create)
    .command('actualizar', 'Actualiza el estado  completado de una tarea', opts.update)
    .command('borrar', 'Actualiza el estado  completado de una tarea', opts.borrar)
    .help()
    .argv

module.exports = {
    argv
}