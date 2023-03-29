//importamos la conexion con el sgdb
import { pool } from "../dbConect.js";
//Metodo create
export const createPublicacion = async (req, res)=>{
    try {
        const {imagen, descripcion}=req.body 
         const [rows] = await pool.query('INSERT INTO publicacion(imagen, descripcion)VALUES(?,?)', [imagen, descripcion])
         res.send({
            id: rows.insertId,
            imagen,
            descripcion,
         })
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, intentalo mas tarde'
        })
    }
}
//Metodo para actualizar una publicacion
export const updatePublicacion = async(req, res)=>{
    try {
        const {id_publicacion} = req.params
        const {imagen, descripcion} = req.body

        const [result] = await pool.query('UPDATE publicacion SET imagen = IFNULL(?, imagen), descripcion = IFNULL(?,descripcion), WHERE id_publicacion = ?', [id_publicacion,imagen, descripcion])
        
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'Publicacion no encontrada'
            })
        }else{
            const [rows] = await pool.query('SELECT * FROM publicacion WHERE id_publicacion = ?', [id_publicacion])
            res.json(rows[0])
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, intentalo mas tarde'
        })
    }
}
//Metodo para eliminar una publicacion
export const deletePublicacion = async(req, res)=>{
    try {
        const [result]= await pool.query('DELETE FROM publicacion Where id_publicacion = ?', [req.params.id_publicacion])
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Publicacion no encontrada'
            })
        }else{
            return res.status(204).json({
                message: 'Publicacion eliminada correctamente'
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, intentalo mas tarde'
        })
    }
}
//Metodo para listar todas las publicaciones
export const allPublicacion = async(req, res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM foro.publicacion;')
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, intentalo mas tarde'
        })
    }
}
//Metodo para listar una publicacion
export const getPublicacion =async(req, res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM publicacion WHERE id_publicacion = ?', [req.params.id_publicacion])
        if(rows.length <= 0){
            return res.status(404).json({
                message: 'Publicacion no encontrada'
            })
        }else{
            res.json(rows[0])
        }
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal, intentalo mas tarde'
        })
    }
}