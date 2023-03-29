//se importa el modulo router del paquete de express
import { Router } from "express";
import { delUser, getUser, getUsers, postUsers, updateUser } from "../controllers/userController.js";

const router = Router();
//crear rutas utilizando el nombre de la constante que se le da al controlador de la logica con DB
router.get('/usuarios',getUsers)
router.get('usuarios/:id',getUser)
router.post('/usuarios',postUsers)
router.patch('usuarios/:id',updateUser)
router.delete('/usuarios/:id',delUser)

export default router;