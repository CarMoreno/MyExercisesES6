let lenguajes = new Set();

lenguajes.add('php');
lenguajes.add('java');
lenguajes.add('c#').add('go');

console.log(lenguajes); // {'php', 'java', 'c#', 'go'}
console.log(lenguajes.has('html')); // retorna false, pues 'html' no existe en la lista
console.log(lenguajes.size); // cuantos elementos tiene?? 4
console.log(lenguajes.delete('php')); // retorna true si se pudo elimnar el elemento

lenguajes.forEach(
	(lenguaje) => console.log(lenguaje)
);