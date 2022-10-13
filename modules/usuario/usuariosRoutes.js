const express = require('express');
const passport = require('../../utils/auth/passport');
const {
  getFormLogin,
  loginUser,
  logoutUser,
  getFormRegistro,
  registroUsuarioError,
  loginUsuarioError
} = require('./usuariosControllers');

const router = express.Router();

//Login usuario
router.get('/login', getFormLogin);
router.post('/login', passport.authenticate(
  'iniciarSesion',
  {
    failureRedirect: '/api/usuarios/login/error',
    failureMessage: true,
  }
), loginUser);
router.get('/login/error', loginUsuarioError)

//Registro de usuario
router.get('/registro', getFormRegistro);
router.post('/registro', passport.authenticate(
  'registro',
  {
    failureRedirect: '/api/usuarios/registro/error',
    failureMessage: true
  }
), loginUser);

router.get('/registro/error', registroUsuarioError);

router.post('/logout', logoutUser);

module.exports = router;