import mysql from 'mysql2'
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config.js'

const conn = mysql.createConnection({
    user: 'root',
    password: 'gVCvSadtNxMdf51pgy59',
    host: 'containers-us-west-45.railway.app',
    port: 7220,
    database: 'railway'
})



conn.connect(function(err){
    if (err) throw console.log('Error al cargar base de datos:' + err.stack);
})
console.log('conexion exitosa')

export {conn}
