const { Espacio } = require("../models/Model");

class EspaciosController {
  async obtenerTodos(req, res) {
    try {
      const espacios = await Espacio.find({});
      if (espacios.length === 0) {
        res.json("No se encuentran espacios registrados");
      } else {
        res.json(espacios);
      }
    } catch (error) {
      res.status(500).json("Error al obtener los espacios");
    }
  }

  async obtenerPorId(req, res) {
    const id = req.params.id;
    try {
      const espacio = await Espacio.findById(id);
      if (espacio) {
        res.json(espacio);
      } else {
        res.status(404).json("No existe el espacio solicitado");
      }
    } catch (error) {
      res.status(500).json("Error al obtener el espacio");
    }
  }

  async crear(req, res) {
    try {
      const nuevoEspacio = new Espacio(req.body);
      const espacioGuardado = await nuevoEspacio.save();
      res.status(201).json(espacioGuardado);
    } catch (error) {
      res.status(500).json("Error al crear el espacio");
    }
  }

  async actualizar(req, res) {
    const id = req.params.id;
    try {
      const espacioActualizado = await Espacio.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (espacioActualizado) {
        res.json(espacioActualizado);
      } else {
        res.status(404).json("No se pudo actualizar el espacio");
      }
    } catch (error) {
      res.status(500).json("Error al actualizar el espacio");
    }
  }

  async eliminar(req, res) {
    const id = req.params.id;
    try {
      const espacioEliminado = await Espacio.findByIdAndDelete(id);
      if (espacioEliminado) {
        res.status(200).json("Eliminado correctamente");
      } else {
        res.status(404).json("No se pudo eliminar el espacio");
      }
    } catch (error) {
      res.status(500).json("Error al eliminar el espacio");
    }
  }
}

module.exports = new EspaciosController();
