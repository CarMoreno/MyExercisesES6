/**
 * Clase Vehiculo que tiene los atributos y metodos genericos que serán usados por otras clases mas
 * especificas.
 */
class Vehiculo {

	/**
	 * 
	 * @param {string, placa del vehiculo} placa 
	 * @param {anio de fabricacion del vehiculo} anioFabricacion 
	 */
	constructor(placa, anioFabricacion) {
		this.placa = placa;
		this.anioFabricacion = anioFabricacion;
	}

	/**
	 * Retorna la placa del vehiculo
	 */	
	getPlaca() {
		return this.placa;
	}

	/**
	 * Establece una nueva placa al vehiculo
	 * @param {string, nueva placa} placa 
	 */
	setPlaca(placa) {
		this.placa = placa;
	}

	/**
	 * Retorna el anio de fabricacion del vehiculo
	 */
	getAnioFabricacion() {
		return this.anioFabricacion;
	}

	/**
	 * Establece un nuevo año de fabricacion
	 * @param {string, nuev año} anioFabricacion 
	 */
	setAnioFabricacion(anioFabricacion) {
		this.anioFabricacion = anioFabricacion;
	}

}

/**
 * La clase Moto hereda (extends) de una clase mas generica, Vehiculo
 */
class Moto extends Vehiculo {

	/**
	 * Constructor de la clase Moto
	 * @param {placa de la moto} placa 
	 * @param {anio de fabiricacion} anioFabricacion 
	 * @param {numero de llantas de la moto} numLlantas 
	 */
	constructor(placa, anioFabricacion, numLlantas) {
		
		 // Con la plabra super, hacemos uso del constructor de Vehiculo para inicializar los parametros
		 // placa y anioFabricacion
		super(placa, anioFabricacion);
		this.numLlantas = numLlantas;
	}

	/**
	 * Retorna el numero de llantas que tiene una moto
	 */	
	getNumLlantas() {
		return this.numLlantas;
	}

	/**
	 * Modifica el numero de llantas que tiene la moto
	 * @param {numero de llantas} numLlantas 
	 */	
	setNumLlantas(numLlantas) {
		this.numLlantas = numLlantas;
	}
}

let objVehiculo = new Vehiculo('abc123', '2014');
console.log(objVehiculo.getPlaca());
console.log(objVehiculo);
console.log(objVehiculo.getAnioFabricacion());

let objMoto = new Moto('xyz987', '2017', '2');
console.log(objMoto);
console.log(objMoto.getNumLlantas());
console.log(objMoto.getPlaca());
