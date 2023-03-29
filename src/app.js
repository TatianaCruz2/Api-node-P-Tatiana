//utilizar la forma de import paquetes con ES Modules
import  express from "express";
//importar los archivos de donde estan las rutas de cada rol
import userRouter from './routes/userRouter.js'
//import Publicacion from './routes/publicacionRoutes.js'

const app = express()
//usar las rutas creadas
app.use('/api',userRouter)
//app.use('/api', Publicacion)

//Por si el cliente ingresa una ruta que no existe
// app.use((req, res, next)=>{
//     res.status(404).json({
//         message: 'Ruta no encontrada'
//     })
// })

export default app