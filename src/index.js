import express from 'express';

import mesaRoutes from './routes/Mesa.router';

import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


//midlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

//rutas de la aplicacion
app.use("/", mesaRoutes);

//base de datos
import './database.js'

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started on port', process.env.PORT || 8080);
})



export default app;