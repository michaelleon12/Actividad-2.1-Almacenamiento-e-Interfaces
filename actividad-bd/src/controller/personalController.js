const { Personal } = require("../models/Model");

class PersonalController {
  async getAll(req, res) {
    try {
      const personal = await Personal.find({});
      if (personal.length === 0) {
        res.json("No se encuentran personal registrados");
      } else {
        res.json(personal);
      }
    } catch (error) {
      res.status(500).json("Error al obtener el personal");
    }
  }

  async create(req, res) {
    try {
      const newPersonal = new Personal(req.body);
      newPersonal.solicitante = false;
      await newPersonal.save();
      res.status(201).json(newPersonal);
    } catch (error) {
      res.status(500).json("Error al crear el registro de personal");
    }
  }

  async getAllSolicitantes(req, res) {
    try {
      const solicitantes = await Personal.find({ solicitante: true });
      if (solicitantes.length === 0) {
        res.json("No se encuentran solicitantes registrados");
      } else {
        res.json(solicitantes);
      }
    } catch (error) {
      res.status(500).json("Error al obtener los solicitantes");
    }
  }

  async createSolicitante(req, res) {
    try {
      const newPersonal = new Personal(req.body);
      newPersonal.solicitante = true;
      await newPersonal.save();
      res.status(201).json(newPersonal);
    } catch (error) {
      res.status(500).json("Error al crear el registro de solicitante");
    }
  }
}

module.exports = new PersonalController();
