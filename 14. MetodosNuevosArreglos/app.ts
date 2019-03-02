// ------------ Metodos nuevos para trabajar con arreglos ------------------------
// 6. Filter: Crea un nuevo arreglo

/**
 * Dado el siguiente arreglo, se requiere guardar en un nuevo arreglo solo aquellos numeros que sean pares
 */
let vector = [1,2,354,23,13,67,87,54,23,10];

// 1. Solucion sin usar filter:

/* let vector_pares = [];

for (let i in vector) {
	if(vector[i] % 2 == 0) {
		vector_pares.push(vector[i]);
	}
} */

// 2. Solucion usando Filter
/* Filter toma como parametro en este caso, cada elemento del vector, y si el callback retorna true entonces
ese elemento es agregado al vector_pares, si retorna false, lo descarta*/

let vector_pares = vector.filter( (numero) => {return numero % 2 == 0;} )
console.log(vector_pares);

// 7. Map

/**
 * Dado el siguiente arreglo, se requiere crear un nuevo arreglo que contenga los cuadrados de los elementos
 */
let enteros = [2,3,6,7,-10,-13,43];

// 1. Solucion sin Map
/*let enteros_cuadrados = [];
for (let i in enteros) {
    enteros_cuadrados.push(Math.pow(enteros[i], 2));
}*/

// 2. Solucion con Map

let enteros_cuadrados = enteros.map( (numero) => {return Math.pow(numero, 2)} );
console.log(enteros_cuadrados);

// 8. forEach, es parecido a Map con la diferencia de que no retorna un nuevo arreglo

let decimales = [5.0, 2.4, 9.4, 3.7, 3.15];

/* La funcion de calback tiene los parametros:
1. elemento (elemento actual del arreglo)
2. indice (el indice del elemento actual)
3. Arreglo (es el arreglo como tal, el cual se está recorriendo)
*/
decimales.forEach((elemento, indice, arreglo) => {
    arreglo[indice] = Math.pow(elemento, 2);
});
console.log(decimales);

