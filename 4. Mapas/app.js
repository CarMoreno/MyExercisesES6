let mapa = new Map();

mapa.set('nombre', 'pikachu');
mapa.set('color', 'amarillo');
mapa.set('tipo', 'electrico');

console.log(mapa);
console.log(mapa.get('nombre'));//obtenemos pikachu
console.log(mapa.has('color')); // Preguntamos si existe la clave 'color' true
console.log(mapa.delete('tipo')); // borra la clave valor tipo => electrico (retorna true, si lo borro), false en caso contrario
// {'nombre' => 'pikachu', 'color' => 'amarillo', 'tipo' => 'electrico'}
console.log(mapa);