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
  },
  edad: {
    type: String,
    required: false,

  },
  localidad: {
    type: String,
    required: false,

  },
  fumador: {
    type: Boolean,
    required: false,

  },
  deportista: {
    type: Boolean,
    required: false,

  },
  cinefilo: {
    type: Boolean,
    required: false,

  },
  playa: {
    type: Boolean,
    required: false,

  },
  foto: {
    type: String,
    default: 'https://images.unsplash.com/photo-1638349978185-b2556ec8436a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    required: false,

  },
  dislikeDado: {
    type: [String],
    required: false,

  },
  likesDado: {
    type: [String],
    required: false,

  },
  likesRecivido: {
    type: [String],
    required: false,

  },
  dislikeRecivido: {
    type: [String],
    required: false,

  },

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