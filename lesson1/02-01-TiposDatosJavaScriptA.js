/*
Ejemplos de datos de JavaScript 
*/
//Tipo de Dato String
var nombre = "Maria";
console.log(nombre);

nombre = 10;
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Sara",
    apellido : "Perez",
    telefono : "6475858668",
}
console.log(typeof objecto);

//Tipo de dato bopean (true, false)
var bandera = true;
console.log (typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo cclase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi'];
console.log(typeof autos);

//cadena vacia
var z = '';
console.log(z);
console.log(typeof z);

//concanetacion de cadenas
var nombre = 'maria';
var apellido = 'ayala';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'sol' + ' ' +'celeste';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

//sumar valores
x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

let nombres;
nombres = "maria";
console.log( nombres );

const apellidos = "ayala";
//apellidos = "ayala";

//declarar variables

let nombreCompleto3 = "maria ayala";
console.log( nombreCompleto3);

let a, b;
a = 10, b = 20;
let c = a + b;
console.log(c);

//reglas para definir nombres a las variables

let nombreCompleto4 = "maria ayala";
let nombrecompleto4 = "sol celeste";
console.log(nombreCompleto4);
console.log(nombrecompleto4);

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto no se permite empezar una variable con una numero o cualquier simbolos a parte de los permitidos
