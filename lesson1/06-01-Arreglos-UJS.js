// array = arreglo
//let autos = new Array('bmw', 'mercedes benz', 'volvo'); as se hacia antes}

const autos = ['bmw', 'mercedes benz', 'volvo'];
console.log(autos);
//Recorrer los elemento de la variable autos
console.log(autos[ 0 ]);

//Recorrer todos los elemento de una vez
for( let i = 0; i < autos.length; i++){
    console.log( i + ' : ' + autos[ i ])
}
//modificar los elementos de un arreglo
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//PUSH nos permite agregar elementos a un arreglo

autos.push( 'Audi' );
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

//Preguntar si es un tipo Array

console.log( typeof autos);

console.log( Array.isArray(autos));

console.log( autos instanceof Array);