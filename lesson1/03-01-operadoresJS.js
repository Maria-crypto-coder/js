let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma" + z);

z = a - b;
console.log("Resultado de la resta" + z);

z = a * b;
console.log("Resultado de la multiplicacion" + z);

z = a / b;
console.log("Resultado de la division" + z);

z = a % b;
console.log("Resultado de la operacion modulo" + z);

z = a ** b;
console.log("Resultado de operador de exponente");

//operadores de incremento y decremento

//incremento
//pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//port-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Precremento
z = --a;
console.log(a);
console.log(z);

//postdecremento
z = b--;
console.log(b);
console.log(z);

//Presedencia de Operadores
let e = 3, f = 2, g = 1;

let h = e * f + g;
console.log(h);

h = g + e * f;
console.log(h);

//Ejercicios
//Estructura if else
//Ejemplo 1
let j = 11;

if ( j % 2 == 0){
    console.log("Es un numero par")
}
else{
    console.log("Es un numero impar")
}
//Ejemplo 2
let edad = 20; adulto = 18;
if( edad >= adulto ){
    console.log("Es un adulto")
}
else{
    console.log("Es un menor")
}
//Operador AND (&&), regresa true solo si ambos operando son true
let k = 15;
let valMin = 0, valMax = 10;

if( k >= valMin && k <= valMax){
    console.log("Dentro del rango")
}
else{
    console.log("Fuera de rango")
}

//Operador OR (||) regresa true si cualquieoperando es true
let vacaciones = true, diaDescanso = false;
if( vacaciones || diaDescanso){
    console.log("Padre asiste")
}
else{
    console.log("Padre ocupado")
}
//Operador ternario
let resultado = (3>2) ? "verdadero" : "false";
console.log(resultado);

let number = 9;
resultado = ( number % 2 == 0) ? "numero impar" : "numero par";
console.log ( resultado );

//Convertir un strig a un number

let miNumero = "20x";

let años = Number(miNumero);
console.log( años );

if( isNaN(años)){
    console.log("No es un numero")
}
else{
if (años >= 18){
    console.log("Puede votar")
}
else{
    console.log("Muy jover para votar")
}
}

let result = (años>= 18) ? "Puede votar" : "No puede votar";
console.log(result);

//Ejemplos de presedencia
let m = 5;
let n = 10;
let o = ++m + n--;
console.log(m);
console.log(n);
console.log(o);

let resulta = 4 + 5 * 6 / 3; // (4 + ((5 * 6)/ 3))
console.log(resulta);

resulta = (4 + 5) * 6 / 3;
console.log(resulta);
