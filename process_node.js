// el objeto global del proceso que se ejecuta
console.log('hola')
console.log(process.argv)
// console.log(process.env) ///todos los días en backend
//forma en que manejamos datos sensibles
//manejar eventos






//útil para electron//
process.on('beforeExit', () => {
// cerrar sesiones de base de datos
// mandar mensajes
//cerrar funciones del sistema operativo


    console.log('👋🏻Regresa pronto')
}
)