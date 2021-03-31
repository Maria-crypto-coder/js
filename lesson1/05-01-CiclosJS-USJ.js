
//let contador = 0;
//while
/*while( contador < 3 ){
    console.log(contador);
    contador++; 
}*/

//Do while
/*do{
    console.log(contador);
    contador++;
}
while(contador < 3);*/

//For 
/*for(contador = 0; contador < 3 ; contador++){
    console.log(contador);
}
console.log("fin ciclo For");*/

//For integrando la palabra break
//Buscamos numeros pares
/*for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}*/

//Continue
for( let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue; //ir a la siguiete interacion
    }
    console.log(contador);
}


