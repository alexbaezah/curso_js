/* switch

switch (1) {
    case 1:{
        console.log('yo soy el caso 1');
        break;
    }
    case 2:{
        console.log('Chanchito feliz');
        break;
    }
    case 3:
        console.log('chanchito triste ;_;');
        break;
        default:
            console.log('no hay chanchitos!! u_u');
        break;
    
        
}
*/

// ciclo for

for (let i = 0;  i < 10 ; i++) {
    console.log(i+1);
}

// accediendo a los elementos de un arreglo

const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

for (let i = 0; i < numeros.length; i++){
    
    console.log(numeros[i]);
}



// para saber si son par o impar
for (let i = 0; i < numeros.length; i++){
    
    if (numeros[i] % 2 == 0 ){
        console.log(numeros[i] + ' es par')
    }else if (numeros[i] % 2 == 1){
        console.log(numeros[i] + ' es impar')
    }
}