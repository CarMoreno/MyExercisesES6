let arreglo = [4,5,1,30,43];

// Ordenar arreglos
// 1. Forma clásica

// 2. Sort: La funcion sort no organiza los numeros correctamente, pues los ordena de acuerdo al primer digito
// es decir, con el ejemplo anterior, quedaria: 1, 30, 4, 43, 5
arreglo.sort();

// Ordenamos el arreglo de menor a mayor
arreglo.sort( (a,b) => {return a-b} );

// 3. Reverse: El metodo reverse pone el ultimo elemento como el primero, y asi sucesivamente
arreglo.reverse();

// 4. Split: Convertir una cadena en un arreglo
let cadena = "a,b,c,d,e,f".split(',');// el separador de la cadena
console.log(cadena); // cadena ahora es un arreglo

// 5. Join: Convertir arreglo en cadena
frutas = ['banano', 'pera', 'manzana', 'sandía'].join(',');// se vuelve una cadena y cada elemento se separa por una coma
console.log(frutas);

