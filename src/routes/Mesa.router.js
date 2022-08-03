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
    vaciarTodasLasMesas,
    getMesas2
} from '../controllers/Mesa.controller';


const router = Router()

//rutas de la aplicacion
router.get('/', getMesas2);
router.get('/mesas', getMesas)
router.post('/newmesa', createMesa)
router.post('/newmesa/addpedido/:id', addPedidoComida)
router.delete('/newmesa/:id_pedido/delitem/:id_mesa', deleteItemPedido )
router.delete('/deletemesa/:id', deleteMesa)
router.put('/cerrarmesa/:id', closeMesa)
router.put('/vaciarmesa/:id', vaciarMesa)
router.put('/editcubiertos/:id', editCubiertos)
router.put('/vaciartodaslasmesas', vaciarTodasLasMesas)


export default router;