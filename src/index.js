
import express from 'express'
import app from './app.js';

//importar el pool del archivo de conexion a la BD
import { pool } from './dbConect.js';
//crear ruta para prueba de BD de forma asincrona
//const app = express();
app.get('/prueba', async(req, res)=>{
    const [result] = await pool.query('SELECT * FROM Ventas.users')
    res.json(result)
})


 app.listen(3000)
 console.log('Server up running http://localhost:3000')