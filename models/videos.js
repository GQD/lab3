//Definición del modelo de la tabla de Videos mediante //sequelize.define 

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    	'Videos',
      { etiquetaVideo: DataTypes.STRING,
        direccionVideo: DataTypes.STRING,
	   generoMusical: DataTypes.STRING,
        fecha: DataTypes.INTEGER

      }
    );
  }
