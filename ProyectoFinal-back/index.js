import express from 'express';

import mongoose from 'mongoose';

import { mockUsers } from './mockUsers/mockUsers.js';
import userRoute from './routes/users.js';

const app = express();

import cors from 'cors';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost:27017/proyectoFinal', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

console.log(mockUsers);


app.post('/register', userRoute);


// mockUsers.map(item => {
//   createUser({
//     name: item.user,
//     genero: item.genero,
//     email: item.email,
//     password: item.password
//   });
// })

app.listen(8080, () => {
  console.log('Escuchando por el puerto 8080');
});