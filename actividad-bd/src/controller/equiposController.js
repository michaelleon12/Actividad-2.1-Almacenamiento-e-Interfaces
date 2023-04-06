const {Equipo} = require("../models/Model");
class EquiposController {
  async getAll(req, res) {
    try {
      const equipos = await Equipo.find();
      if (equipos.length === 0) {
        res.json("No se encuentran equipos registrados");
      } else {
        res.json(equipos);
      }
    } catch (error) {
      res.status(500).json("Error al obtener los equipos");
    }
  }

  async getById(req, res) {
    const id = req.params.id;
    try {
      const equipo = await Equipo.findById(id);
      if (equipo) {
        res.json(equipo);
      } else {
        res.status(404).json("No existe el equipo solicitado");
      }
    } catch (error) {
      res.status(500).json("Error al obtener el equipo");
    }
  }

  async create(req, res) {
    const equipo = new Equipo(req.body);
    try {
      const nuevoEquipo = await equipo.save();
      res.status(201).json(nuevoEquipo);
    } catch (error) {
      res.status(500).json("Error al crear el equipo");
    }
  }

  async update(req, res) {
    const id = req.params.id;
    try {
      const equipoAnterior = await Equipo.findById(id);
      if (equipoAnterior) {
        const equipoActualizado = await Equipo.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.json(equipoActualizado);
      } else {
        res
          .status(404)
          .json("No se pudo actualizar ya que no existe el equipo");
      }
    } catch (error) {
      res.status(500).json("Error al actualizar el equipo");
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    try {
      const equipo = await Equipo.findByIdAndDelete(id);
      if (equipo) {
        res.status(200).json("Eliminado correctamente");
      } else {
        res.status(404).json("No se pudo eliminar ya que no existe el equipo");
      }
    } catch (error) {
      res.status(500).json("Error al eliminar el equipo");
    }
  }
}

module.exports = new EquiposController();
