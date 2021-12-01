import express from 'express';

import user from '../models/users.js';

import { login, createUser } from '../controllers/users.js'

const rutas = express.Router();

// rutas.route('/adduser')
//   .post((req, res, next) => {
//     user
//       .create(req.body, (error, data) => {
//         if (error) {
//           return next(error)
//         } else {
//           res.json(data)
//         }
//       })
//   });

rutas.post('/adduser', createUser);
rutas.post('/login', login);


export default rutas;