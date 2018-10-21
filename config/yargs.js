let descripcion = {
    alias: "d",
    demand: true
}
let completar = {
    alias: "c",
    default: true,
}
let estado = {
    alias: "e",
    default: "all"
}

const argv = require("yargs")
    .command("listar", "lista las tareas por hacer", { estado })
    .command("crear", "crea una nueva tarea", { descripcion })
    .command("actualizar", "completa una tarea", { completar, descripcion })
    .command("borrar", "Borra una entrada", { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}