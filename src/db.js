import mysql from 'mysql2'
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config.js'

const conn = mysql.createConnection({
    user: 'root',
    password: '0E8BDlsoPCqqRa2YCDK8',
    host: 'containers-us-west-73.railway.app',
    port: 5601,
    database: 'railway'
})



conn.connect(function(err){
    if (err) throw console.log('Error al cargar base de datos:' + err.stack);
})
console.log('conexion exitosa')

export {conn}
