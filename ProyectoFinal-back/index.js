import express from 'express';

import mongoose from 'mongoose';

import fetch from "node-fetch";

import { mockUsers } from './mockUsers/mockUsers.js';
import UserModel from './models/users.js';

import { celebrate, Joi } from 'celebrate';

const app = express();


mongoose.connect('mongodb://localhost:27017/proyectoFinal', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json());

console.log(mockUsers);


export const createUser = (req, res, next) => {
  UserModel.create({
    name: req.name,
    genero: req.genero,
    email: req.email,
    password: req.password,
  })
};

app.post('/register', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
    name: Joi.string().required().min(2),
    genero: Joi.string().required()
  }).unknown(true),
}), createUser)


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