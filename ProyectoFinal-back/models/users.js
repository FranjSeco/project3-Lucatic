import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  genero: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
  }
}, {
  collection: 'proyectoFinal'
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Incorrect email or password'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Incorrect email or password'));
          }

          // return res.status(200).send({email}); // now user is available
          return user;
        });
    });
};

export default mongoose.model('user', userSchema);