import {Router} from 'express';
import{ 
    getMesas,
    createMesa,
    deleteMesa,
    closeMesa,
    vaciarMesa,
    addPedidoComida,
    editCubiertos,
    deleteItemPedido,
    sumarTotalTodasMesas
} from '../controllers/Mesa.controller';


const router = Router()

//rutas de la aplicacion
router.get('/totalmesas', sumarTotalTodasMesas);
router.get('/mesas', getMesas)
router.post('/newmesa', createMesa)
router.post('/newmesa/addpedido/:id', addPedidoComida)
router.delete('/newmesa/:id_pedido/delitem/:id_mesa', deleteItemPedido )
router.delete('/deletemesa/:id', deleteMesa)
router.put('/cerrarmesa/:id', closeMesa)
router.put('/vaciarmesa/:id', vaciarMesa)
router.put('/editcubiertos/:id', editCubiertos)

/* router.get('/test/:id_compra/compra/:id_product', (req, res) => {
    const {id_product, id_compra} = req.params;
    const compra = {
        id_compra,
        id_product,
    }
    res.json(compra);
}) */


export default router;