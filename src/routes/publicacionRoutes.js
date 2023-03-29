//se importa el modulo router del paquete express
import { Router } from "express";
import { allPublicacion, createPublicacion, deletePublicacion, getPublicacion, updatePublicacion } from "../controllers/publicacionController";
const router = Router();

//crear rutas utilizando el nombre de la constante
// que se le da al controlador de la logica conDB
router.get('/publicaciones', allPublicacion)
router.get('/publicacion/:id_publicacion', getPublicacion)
router.post('/publicacion', createPublicacion)
router.delete('/publicacion/:id', deletePublicacion)
router.patch('/publicacion/:id_publicacion', updatePublicacion)

//exportar las rutas para ser usadas en app.js