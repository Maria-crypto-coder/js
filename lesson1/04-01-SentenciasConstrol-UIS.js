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
 