import Newsletter from "../models/Newsletter.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Comprobar que se ha enviado un email
    if (!email) {
      return res.status(400).json({
        message: "El email es obligatorio",
      });
    }

    // Comprobar si ya existe
    const subscriber = await Newsletter.findOne({ email });

    if (subscriber) {
      return res.status(400).json({
        message: "Este email ya está suscrito",
      });
    }

    // Guardar en la base de datos
    const newSubscriber = await Newsletter.create({
      email,
    });

    res.status(201).json({
      message: "Suscripción realizada correctamente",
      subscriber: newSubscriber,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};