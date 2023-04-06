const {ReservaEspacio} = require("../models/Model");

class ReservasEspacioController {
  async agregarReserva(req, res) {
    try {
      const reserva = new ReservaEspacio(req.body);
      await reserva.save();
      res.status(201).json(reserva);
    } catch (error) {
      res.status(500).json("Error al agregar reserva");
    }
  }

  async getReservasEspacioAll(req, res) {
    try {
      const reservas = await ReservaEspacio.find({});
      if (reservas.length === 0) {
        res.json("No hay reservas de espacios registradas");
      } else {
        res.json(reservas);
      }
    } catch (error) {
      res.status(500).json("Error al obtener las reservas");
    }
  }

  async getReservasEspacioPorDia(req, res) {
    try {
      const dia = req.params.dia;
      const reservasDia = await ReservaEspacio.find({ fecha: dia });
      if (reservasDia.length === 0) {
        res.json(`No hay reservas para el día ${dia}`);
      } else {
        res.json(reservasDia);
      }
    } catch (error) {
      res.status(500).json(`Error al obtener las reservas del día ${dia}`);
    }
  }

  async getReservarEspacioRangoFech(req, res) {
    try {
      const fechaInicio = new Date(req.params.fechaInicio);
      const fechaFin = new Date(req.params.fechaFin);
      const reservasRangoFech = await ReservaEspacio.find({
        fecha: { $gte: fechaInicio, $lte: fechaFin },
      });
      if (reservasRangoFech.length === 0) {
        res.json("No hay reservas en el rango de fechas especificado");
      } else {
        res.json(reservasRangoFech);
      }
    } catch (error) {
      res
        .status(500)
        .json(
          "Error al obtener las reservas en el rango de fechas especificado"
        );
    }
  }
}

module.exports = new ReservasEspacioController();
