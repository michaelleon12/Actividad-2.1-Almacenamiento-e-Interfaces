class MiddlewareNotFound {
  handlerNotFoundRouter(req, res, next) {
    res.status(404).json({
      mensaje: "La ruta que has accedido no se encuentra definida.",
    });
  }
}

module.exports = new MiddlewareNotFound();
