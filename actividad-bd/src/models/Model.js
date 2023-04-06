const mongoose = require("mongoose");

const personalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  puesto: {
    type: String,
    required: true,
  },
  solicitante: {
    type: Boolean,
    required: true,
  },
});

const equipoSchema = new mongoose.Schema({
  equipo: {
    type: String,
    required: true,
  },
  disponibilidad: {
    type: Boolean,
    required: true,
  },
});

const espacioSchema = new mongoose.Schema({
  espacio: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  solicitante: {
    type: String,
    required: true,
  },
});

const reservaEspacioSchema = new mongoose.Schema({
  espacio: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  solicitante: {
    type: String,
    required: true,
  },
});

const reservaEquipoSchema = new mongoose.Schema({
  equipo: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  solicitante: {
    type: String,
    required: true,
  },
});

const Personal = mongoose.model("Personal", personalSchema);
const Equipo = mongoose.model("Equipo", equipoSchema);
const Espacio = mongoose.model("Espacio", espacioSchema);
const ReservaEspacio = mongoose.model("ReservaEspacio", reservaEspacioSchema);
const ReservaEquipo = mongoose.model("ReservaEquipo", reservaEquipoSchema);
module.exports = { Personal, Equipo, Espacio, ReservaEspacio, ReservaEquipo };
