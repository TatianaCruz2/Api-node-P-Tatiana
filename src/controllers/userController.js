//importamos el modulo de la coneccion a la BD
import { pool } from "../dbConect.js";

//crear y exportar el controlador para la ruta de usuarios
//Metodo get
export const getUsers = async(req, res)=>{
 try {
    const[result] = await pool.query('SELECT * FROM ventas.users')
    res.json(result)
 } catch (error) {
    return res.status(500).json({
        message: 'No se ha encontrado ningun dato'
    })
 }
}
//Metodo get/id
export const getUser = async(req, res)=>{
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id])
        //muestra error si no se encuentra el id
        if (result.length <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        })
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            message: 'No se ha encontrado ningun dato'
        })
        
    }
}
//Metodo post
export const postUsers = async(req, res)=>{
    try {
        const {id, name, city, rol} = req.body
        //inserta datos mediante json
        const [result] = await pool.query('INSERT INTO users (id, name, city, rol) VALUES (?,?,?,?)', [id, name,city,rol])
        res.send({
            id: result.insertId,
            name,
            city,
            rol
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'No se ha encontrado ningun dato'
        })
    }
}
//Metodo Delete por id
export const delUser = async (req, res)=>{
    try {
        const result = await pool.query('DELETE FROM users WHERE ID = ?',[req.params.id])
        res.send('El usario ha sido eliminado correctamente')

        
    } catch (error) {
        return res.status(500).json({
            message: 'No se ha logrado eliminar ningun dato'
        }) 
    }
}
// Metedo para actualizar PATCH
export const updateUser = async (req, res)=>{
    try {
        const {id} = req.params
        const {name, city, rol} = req.body
        const [result] = await pool.query('UPDATE users SET name=IFNULL(?,name), city=IFNULL(?,city), rol=IFNULL(?,rol) WHERE id = ?', [name, city, rol])

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'User no encontrado, para actualizar'
        })
        const [rows] = await pool.query('SELECT * FROM users WHERE ID = ?', [id])
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: 'No se ha logrado actualizar ningun dato'
        })
    }
}