

const getFormLogin = (req, res) => {
  res.render('loginForm');
}

const loginUser = (req, res) => {
  res.redirect("/api/productos");
}

const logoutUser = (req, res) => {
  const nombreUsuario = req.user.email;
  req.logout(function (err) {
    if (err) { return next(err); }
    res.render('adios', { nombreUsuario })
    res.set({ 'Refresh': '3; url=/api/productos' });
  });
};

const getFormRegistro = (req, res) => {
  res.render('registroForm');
};

const registroUsuarioError = (req, res) => {
  res.render("registroForm", { error: "El usuario ya existe" });
}

const loginUsuarioError = (req, res) => {
  res.render("loginForm", { error: "Usurio o contrasena incorrecta" });
}

module.exports = {
  getFormLogin,
  loginUser,
  logoutUser,
  getFormRegistro,
  registroUsuarioError,
  loginUsuarioError
};