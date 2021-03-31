//Ejemplo if else
let condition = true;

if(2>3){
    console.log("Condicion verdadera");
}
else{
    console.log("Condicion falsa")
}

let numero = 5;
if( numero == 1 ){
    console.log("Numero uno");
}
else if ( numero == 2){
    console.log("Numero dos");
}
else if ( numero == 3){
    console.log("Numero tres")
}
else if( numero == 4){
    console.log("Numero cuatro")
}
else{
    console.log("Numero desconocido")
}

//

let mes = 1;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno"
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera"
}
else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano"
}
else if( mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño"
}
else{
    estacion = "Valor incorrecto"
}
 console.log(estacion);

 //Ejercicio
 /*
 6 am - 11 am - Buenos  dias
 12 pm - 18 pm - Buenas tardes
 19 pm - 24 pm - Buenas noches
 0 am - 6 am - Durmiendo
 */
 

let horaDia = 12;
let mensaje;
if( horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos Dias";
}
else if ( horaDia >= 12 && horaDia <=18 ){
    mensaje = "Buenas tardes";
}
else if( horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}
else if( horaDia >= 0 && horaDia <= 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto";
}
console.log(mensaje);

// sentencia switch

let number = 4;

let numberTexto = 'VAlor desconocido';

switch( number ){
    case 1:
        numberTexto = 'Numero uno';
        break; //para que termine de ejecutar el switch y seguir con el siguiente d lo contrario seguimos con la ejecucion en la siguiente variale y no es reconmendable
    case 2:
        numberTexto = 'Numero dos';
        break;//si sacamos el break directamente pasa al siguente switch
    case 3:
        numberTexto = 'Numero tres';
        break;
    case 4:
        numberTexto = 'Numero cuatro';
        break;
    default:
        numberTexto = 'Caso no encontrado'    

}
console.log(numberTexto);

let month = 4;
let station = 'Estacion desconocida';

switch( month){
    case 1: case 2: case 12:
        station = 'Invierno';
        break;
    case 3:  case 4: case 5:
        station = 'Primavera';
        break;
    case 6: case 7: case 8:
        station = 'Verano';
        break;
    case 9: case 10: case 11:
        station = 'Otoño';
        break;        
    default:
        station = 'Valor desconocido';
}
console.log(station);

 


















































































