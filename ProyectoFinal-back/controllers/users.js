import { user } from '../models/users.js'

const login = (req, res, next) => {
  const { email, password } = req.body;
  return user.findUserByCredentials(email, password)
    .then((user) => {
      console.log(user, 'en login')
      if (!user) {
        throw new NotAuthorized('Not Authorized');
      }

      const token = jwt.sign({ _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' });

      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });

      return res.send({ token });
    })
    .catch(next);
};