const POKEMON = {
	nombre: 'Pikachu',
	color: 'Amarillo',
	evolucion: 'Raichu'
};

// Antes..
/*var descripcion = 'Hola, mi nombres es '+POKEMON.nombre+' soy de color '+POKEMON.color+
				  ' y mi evolucion es '+POKEMON.evolucion;*/

// Con ES6
let descripcion = `Hola, mi nombres es ${POKEMON.nombre} soy de color ${POKEMON.color}
y mi evolucion es ${POKEMON.evolucion}`;
console.log(descripcion);				  