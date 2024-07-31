const fs = require('node:fs');
const path = require('node:path')
// file system => sistema operativo

console.log(path.sep, 'hola')
const pathFile = path.join('4-JS-AVANZADO', 'lista.tx')
//buena práctica a la hora de usar archivos y carpetas en el sistema operativo



console.log(path.extname(pathFile))
const file = fs.readFile('lista.txt', 'utf8', (err, data) => {
    //callback solución que se dió a las funciones que tardan tiempo en ejecutarse
    //Bloquean el hilo de ejecución
    //Encoding de texto
    //BLoque de memoria => buffer
    if (err) {
        console.log(err);
        return;
    } 

    console.log(data);
});

 