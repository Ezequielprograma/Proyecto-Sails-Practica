module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },

  fn: async function (inputs,exits) {

    // Respond with view.

    //const  articulos = await Articulo.find();
    //const  articulos = await Articulo.find({marca: "naranja"});
    //const  articulos = await Articulo.find({marca: "rojo", precio:30});
    /*const articulos = await Articulo.find({
      precio: {
        '>': 20
      }
    })
    */
    /*
    const articulos = await Articulo.find({
      where: {
        precio: {
          '>': 20
        },
      },
      sort: "precio ASC"
    })*/

    const articulos = await Articulo.find().populate('usuario').populate('comentarios')

    return exits.success({articulos:articulos});

  }

};
