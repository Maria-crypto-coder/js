//Hosting
//miFuncion(4, 2);

//Declaracion de la funcion
function miFuncion(a, b){
    //console.log("suma: " + (a + b) )
    console.log(arguments.length);//ejemplo de funciones como objeto
    return a + b; //regresar un valor al imprimir
}

//miFuncion(2, 3); //llamamos la funcion y nos da el resultado

let resultado = miFuncion(2 , 3);
console.log(resultado);

//Funciones de Tipo Expresion
//Declaracion Funcion de Tipo de Expresion
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//Self invoking

(function (a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
}) (3, 6);

//Funciones como objetos

console.log(typeof miFuncion); //Ejemplo en return de arriba

//metodo para comprobar que la funciones pueden ser descriptas como objetos metodo tostring
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto); //los codigo en el quokka es automatica no es necesario entederlo solo saber que la sfunciones al ser objetos tambien tienen prop y metodos no es requirimiento entenderlo

//Funciones Flecha a partir de funcion de expresion

const sumarFuncionTipoFlecha = (a, b) => a + b; 
resulta = sumarFuncionTipoFlecha(3, 5);
console.log(resulta);

//parametros y argumentos de una funcion
//primero hacemos una declaracion tipo expresion
let restar = function (c = 4, d = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);//aunque no podemos accederlo ya que no pusimos nungun valor amla variable
    return c - d
}
//se suscribe a los valores ya impuesto desde un inicio
result = restar(4,3,7);
console.log(result);