import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO2, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})




