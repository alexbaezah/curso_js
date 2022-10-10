const lista = ['alex', 'patricio', 'sebastián'];
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}


// una función que itere array
/*
function iterar (a){
    for(let i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}

iterar(lista);
iterar(numeros);
*/

// funciones para sumar

/*
function suma(a, b){
    resultado = a + b ;
    console.log(resultado);
}

suma(1, 2);
suma(8, 9);
*/

// callbacks

function sumar(a,b, cb){
    const r = a + b;
    cb(r);
}

function callback(result){
    console.log('restulado es: ', result);
}

function iterar (a, ab){
    for(let i = 0; i < a.length; i++){
        const listado = a[i];
        ab(listado);
    }
}

function callback_2(result){
    console.log(result)
}

iterar(lista, callback_2);
iterar(numeros, callback_2)

sumar(5,5, callback);
