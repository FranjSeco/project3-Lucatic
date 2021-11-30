import express from 'express';

import user from '../models/users.js';

const rutas = express.Router();

rutas.route('/adduser')
  .post((req, res, next) => {
    user
      .create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });
// userRoute.route('/register')
//   .post((req, res, next) => {
//     user.create({
//       name: req.name,
//       genero: req.genero,
//       email: req.email,
//       password: req.password,
//     })
//   });

export default rutas;