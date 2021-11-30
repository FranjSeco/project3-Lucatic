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

rutas.route('/login')
  .post((req, res, next) => {
    const { email, password } = req.body;
    return user.findUserByCredentials(email, password)
      .then((user) => {
        console.log(user, 'en login')
        if (!user) {
          throw new NotAuthorized('Not Authorized');
        }

        const userID = user._id;
        console.log(userID, 'id');
        // const token = jwt.sign({ _id: user._id },
        //   NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        //   { expiresIn: '7d' });

        // res.cookie('jwt', token, {
        //   maxAge: 3600000 * 24 * 7,
        //   httpOnly: true,
        // });
        res.cookie('ID', userID, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
        });

        return res.send({ userID });
      })
      .catch(next);
  })

export default rutas;