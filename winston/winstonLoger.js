const wiston = require("./index");

const winstonInfo = (req, res, next) => {
  wiston.info(`ruta ${req.url}, método ${req.method}`)
  next()
}

const winstonRouter = (req, res) => {
  res.status(404).send({
    error: 404,
    descripción: `ruta ${req.url} ruta desconocida, método ${req.method}`
  })

}


module.exports = { winstonInfo, winstonRouter };