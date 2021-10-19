//Módulos core de Node.js
/*
- *fs (Manejo de archivos)
- http (Crear un servidor o para pdoer hacer peticiones a otros servidores)
- path (Construcción de rutas hacia los archivos o directorios)
- events (Manejo de eventos)
*/

//Importar un módulo en Node.js
const fs = require("fs");

//Leer un archivo con fs (asincrono)
fs.readFile("saludo.txt", { encoding: "utf8" }, (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.log(err);
    }
});

// const data = fs.readFileSync("./saludo.txt", { encoding: "utf8" }); //Sincrono
// console.log(data);

//Escribe en un archivo de forma asíncrona y reemplaza todo el contenido
fs.writeFile("saludo.txt", "Hola Miguel", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("se ha escrito en el archivo");
    }
});

//Agrega un nuevo contenido a partir del contenido original
fs.appendFile(
    "saludo.txt",
    " Agregamos palabras al final del archivo",
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("se ha escrito en el archivo");
        }
    }
);

//Métodos Síncronos
// fs.readFileSync
// fs.writeFileSync
// fs.appendFileSync

//Métodos Asíncronos
// fs.readFile
// fs.writeFile
// fs.appendFile
