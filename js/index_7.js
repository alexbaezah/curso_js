// control de flujo

if (true ){
    console.log('Estoy dentro de un if!');
}

const edad = 30;

if(edad == 30){
    console.log("tú tienes "+edad);
}else{
    console.log("eres menor de 30");
}


// while
let contador = 0
let verdadero = true;
while(verdadero){
    console.log("hola")
    contador++
    if (contador == 4){
        verdadero = false;
        console.log("se imprimieron 4 hola, se acaba el ciclo")
    }else;
    
}