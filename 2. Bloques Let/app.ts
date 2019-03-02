function ejemploVar() {
	var x: number = 100;
	if(true) {
		var x = 50;
		console.log(x); // 50
	}
	console.log(x);// 50
}

function ejemploLet() {
	let x = 100; // esta variable es distinta a la variable que está anidada en el if
	if(true) {
		let x = 50;
		console.log(x); // 50
	}
	console.log(x);// 100
}
console.log("=============VAR===========");
ejemploVar();
console.log("=============LET===========");
ejemploLet();