const {suma, multi} = require ('./Recursos/operaciones')
const {vehiculos} = require ('./constants')
const os = require ('os')

console.log(suma(1000,20))
console.log(multi(200,2))
vehiculos.forEach(v => {
    console.log('El carro disponible: ' + v.modelo)
})

console.log(os.totalmem() + ' memoria disponible') 
console.log(os.cpus().length, 'procesadores disponibles')
console.log(os.hostname(), 'nombre del host')


 