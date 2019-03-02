/*Los generadores son funciones de las que se puede salir y
volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.*/
function* generador() {
	let index = 0;
	while (index < 3) {
		yield index++;
	}
}


// Una explicacion claro sobre los generadors puede ser enconrada en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function*

/*La llamada a una función generadora no ejecuta su cuerpo inmediatamente;
se devuelve un objeto iterador para la función en su lugar*/
let gen = generador();
console.log(gen.next().value);//0
console.log(gen.next().value);//1
console.log(gen.next().value);//2
console.log(gen.next().value);// indenfinido