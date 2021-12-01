import user from '../models/users.js'
import bcrypt from 'bcryptjs';
let dbData = user;

export const createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) =>
      dbData.create({
        name: req.body.name,
        genero: req.body.genero,
        email: req.body.email,
        password: hash,
      })
    )
    // .then((user) =>
    //   // res.status(200).send({
    //   //   _id: user._id,
    //   //   name: user.name,
    //   //   genero: user.genero,
    //   //   email: user.email,
    //   // })
    //   console.log(user._id, user.name)
    // )
    .catch(next);
};



export const login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(dbData);
  return dbData.findUserByCredentials(email, password)
    .then((user) => {

      console.log(user, 'en login')

      if (!user) {
        throw new NotAuthorized('Not Authorized');
      }

      const userID = user._id;

      console.log(userID, 'id');

      res.cookie('ID', userID, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });

      return res.send({ userID });
    })
    .catch(next);
};

