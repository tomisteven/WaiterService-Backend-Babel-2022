import {Schema, model} from 'mongoose';


const Mesa = new Schema({
    numero: {
        type: String,
        required: true,
        default: 'New'
    },
    total : {
        type: Number,
        required: true,
        default: 0
    },
    cerrada: {
        type: Boolean,
        required: true,
        default: false
    },
    pedidos: [
        {
            posicion: {
                type: Number,
                required: true,
                default: 0
            },
            comida: {
                type: String,
                required: true,
                default: 'x'
            },
            cantidad: {
                type: Number,
                required: true,
                default: 0
            },
            precio: {
                type: Number,
                required: true,
                default: 0
            }
        }
    ],
    cubiertos: {
        type: Number,
        required: true,
        default: 0
    }

});


export default model('Mesa', Mesa);

    