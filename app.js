const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')
const comando = argv._[0]

switch (comando) {

    case 'crear':
        console.log('Crear por hacer')
        const nuevaTarea = porHacer.crear(argv.descripcion)
        console.log(nuevaTarea)
        break


    case 'listar':
            
    const listado = porHacer.listarTareas()
                 console.log("=======================================".green)
                 console.log("           Listado De Tareas".inverse)
                 console.log("=======================================".green)
                 listado.map((tarea, index)=>{
                            const status = (tarea.completado)? 'Terminado'.green.bold: 'No Terminado.'.red.bold
                            console.log(` ${index} - ${tarea.descripcion}  Estado: ${status}`)
                            })
                console.log("=========================================================".america)
        break


    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado)
        break
    
    case 'borrar':
        porHacer.borrar(argv.descripcion)
        console.log(`${argv.descripcion} - eliminado`)
        break    

    default:
        console.log('Comando no es reconocido')
}