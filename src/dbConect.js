//importamos el paquete de createpool de mysql2
import { createPool } from "mysql2/promise";
//crear y exportar la constante pool con los parametros de la bd

export const pool = createPool({
   
    user: 'root',
    password:'',
    port:'3306',
    database:'ventas'
})