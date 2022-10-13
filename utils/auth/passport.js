const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//Services 
const {
  getUsurioByEmailService,
  createUsuarioService,
  getUsuariosByIdService
} = require('../../modules/usuario/usuariosServices')


passport.serializeUser((usuario, callback) => {
  callback(null, usuario._id || usuario.id);
});

passport.deserializeUser(async (id, callback) => {
  const usuario = await getUsuariosByIdService(id);
  callback(null, usuario);
});

passport.use('registro', new LocalStrategy({
  usernameField: 'email', passReqToCallback: true
}, async (req, email, password, callback) => {
  try {
    const { nombre, direccion, edad, numeroTelefono } = req.body;
    const user = await getUsurioByEmailService(email);
    if (user) return callback(null, false, 'el usuario ya existe');
    const newUser = await createUsuarioService({ email, password, nombre, direccion, edad, numeroTelefono })
    callback(null, newUser);
  } catch (error) {
    callback(error, {
      status: false,
      message: error
    });
  };
}));


passport.use('iniciarSesion', new LocalStrategy({
  usernameField: 'email'
}, async (email, password, callback) => {
  try {
    const user = await getUsurioByEmailService(email);
    if (!user || !await bcrypt.compareSync(password, user.password))
      return callback(null, false, { message: 'Usuario o contraseña incorrectos' });
    callback(null, user);
  } catch (error) {
    callback(error, {
      status: false,
      message: error
    });
  };
}));

module.exports = passport;