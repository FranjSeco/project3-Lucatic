import express from 'express';

import user from '../models/users.js';

import { likeUser, login, createUser, updateUser, getAllUsers, dislikeUser } from '../controllers/users.js'

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
rutas.get('/display', getAllUsers);
rutas.put('/updateUser/:id', updateUser);

rutas.put('/:_id/likes', likeUser);

rutas.put('/dislikes/:id', dislikeUser);

export default rutas;