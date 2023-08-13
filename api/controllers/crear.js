const Usuario = require("../models/Usuario");

module.exports = {

  friendlyName: 'Crear',

  description: 'Crear something.',

  inputs: {

  },

  exits: {
    success: {
      responseType: 'redirect'
    }
  },

  fn: async function (inputs,exits) {
    
    
    /*
    const nuevo = await Articulo.create({
      descripcion : "Mucho uso",
      marca: "rojo",
      modelo: "N2",
      precio: 30
    })
    */

    const nuevo = await Usuario.create({
      nombre: 'Alan',
      email: "alan@email.com"
    })
    // All done.
    return exits.success("/");

  }
};
