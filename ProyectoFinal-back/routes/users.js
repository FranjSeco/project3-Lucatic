import express from 'express';

import user from '../models/users.js';

const userRoute = express.Router();

userRoute.route('/register').post((req, res, next) => {
  user.create({
    name: req.name,
    genero: req.genero,
    email: req.email,
    password: req.password,
  })
});

userRoute.route('/users').get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

export default userRoute;