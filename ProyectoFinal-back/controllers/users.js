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
      res.cookie('ID', user._id, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });
      return res.send(user);
    })
    .catch(next);
};
export const getAllUsers = (req, res, next) => {
  dbData.find({})
    .then((users) => {
      res.status(200).send({ data: users })
    })
    .catch(next);
}

export const  updateUser =(req, res, next) => {
  dbData.findByIdAndUpdate(req.params.id, {
      $set: req.body
  }, (error, data) => {
      if (error) {
          return next(error);
          console.log(error)
      } else {
          res.json(data)
          console.log('user updated successfully!')
      }
  })
}

