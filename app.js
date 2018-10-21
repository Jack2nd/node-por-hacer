const argv = require("./config/yargs").argv;
const pH = require("./por-hacer/por-hacer");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "listar":
        let listado = pH.getListado();

        for (let tarea of listado) {
            console.log('========POR HACER ========'.green);
            console.log('Descripción:', tarea.descripcion.blue);
            console.log('Estado:', tarea.completado ? "Completada".green : "No completada".red);
            console.log('=========================='.green);
        }
        break;
    case "actualizar":
        pH.actualizar(argv.descripcion) ? console.log("Se ha actualizado correctamente") : console.log("No existe esa tarea");
        break;
    case "crear":
        pH.crear(argv.descripcion);
        break;
    case "borrar":
        pH.borrar(argv.descripcion);
        break;
    default:
        console.log("Comando no reconocido");
        break;
}