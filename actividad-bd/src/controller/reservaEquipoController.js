const { ReservaEquipo } = require("../models/Model");

class ReservasEquiposController {
  async agregarReservaEquipo(req, res) {
    try {
      const reserva = new ReservaEquipo(req.body);
      const reservaGuardada = await reserva.save();
      res.status(201).json(reservaGuardada);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getReservasEquipoAll(req, res) {
    try {
      const reservas = await ReservaEquipo.find({});
      if (reservas.length === 0) {
        res.json("No hay reservas de Equipos registrados");
      } else {
        res.json(reservas);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getReservasEquipoPorDia(req, res) {
    const dia = req.params.dia;
    try {
      const reservasDia = await ReservaEquipo.find({ fecha: dia });
      if (reservasDia.length === 0) {
        res.json(`No hay reservas para el día ${dia}`);
      } else {
        res.json(reservasDia);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getReservarEquipoRangoFech(req, res) {
    const fechaInicio = new Date(req.params.fechaInicio);
    const fechaFin = new Date(req.params.fechaFin);
    try {
      const reservasRangoFech = await ReservaEquipo.find({
        fecha: { $gte: fechaInicio, $lte: fechaFin },
      });
      if (reservasRangoFech.length === 0) {
        res.json("No hay reservas en el rango de fechas especificado");
      } else {
        res.json(reservasRangoFech);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new ReservasEquiposController();
