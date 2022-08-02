//importamos base de datos
import  Mesa  from '../models/Mesa';


const createMesa = async (req, res) => {
    try{
    const {numero} = req.body;

    const task = new Mesa({numero});

    await task.save();
    res.json(task);
    }
    catch(err){
        console.log(err);
    }

}

const getMesas = async (req, res) => {
    const mesas = await Mesa.find();
    res.json(mesas);
}

const deleteMesa = async (req, res) => {
    try {
        const _id = req.params.id;
        await Mesa.remove( { _id });
        res.json({ message: 'Mesa eliminada' });
        
    } catch (error) {
        console.log(error);
    }
}

const deleteItemPedido = async (req, res) => {
    try{
        const {id_pedido, id_mesa} = req.params;
        const mesa = await Mesa.findById(id_mesa);
        const Pedido = mesa.pedidos.find(pedido => pedido._id == id_pedido);
        mesa.total -= mesa.pedidos[Pedido.posicion].precio * mesa.pedidos[Pedido.posicion].cantidad;
        mesa.pedidos.remove({_id: id_pedido});
        await mesa.save();
        res.json(mesa);
    }
    catch(err){
        console.log(err);
    }
 
}

const closeMesa = async (req, res) => {
    try{
    const {id} = req.params;
    const mesa = await Mesa.findById(id);
    mesa.cerrada = !mesa.completed;
    await mesa.save();
    res.json(mesa);
    }
    catch(err){
        console.log(err);
    }

}

const vaciarMesa = async (req, res) => {
    try{
    const {id} = req.params;
    const mesa = await Mesa.findById(id);
    mesa.pedidos = [];
    mesa.total = 0;
    mesa.cubiertos = 0;
    await mesa.save();
    res.json(mesa);
    }
    catch(err){
        console.log(err);
    }
}

const addPedidoComida = async (req, res) => {
    try {
        
        const {id} = req.params;
        const {comida, cantidad, precio} = req.body;
        const mesa = await Mesa.findById(id);
        mesa.pedidos.push({comida, cantidad, precio, posicion: mesa.pedidos.length});
        mesa.total += cantidad * precio;
        await mesa.save();
        res.json(mesa.pedidos);
    } catch (error) {
        console.log(error);
    }
}

const editCubiertos = async (req, res) => {
    try {
        const {id} = req.params;
        const {cubiertos} = req.body;   
        const mesa = await Mesa.findById(id);
        mesa.cubiertos = cubiertos;
        await mesa.save();      
        res.json(mesa);
        
    } catch (error) {   
        console.log(error);
        
    }
}


export {
    createMesa, 
    getMesas,
    deleteMesa,
    closeMesa,
    vaciarMesa,
    addPedidoComida,
    editCubiertos,
    deleteItemPedido
}