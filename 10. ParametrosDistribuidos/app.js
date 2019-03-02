// Se puede establecer el valor por defecto directamente, así:
function comprarCursos(nombre, precio, cantidad) {
	console.log (nombre, precio, precio);
}

let cursos = ['java', 1000, 3];
comprarCursos(...cursos); // muestra 'java', 1000, 3

