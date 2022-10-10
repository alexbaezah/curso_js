// fat arrow function

/*  
        - no se utiliza la palabra reservada function
        - no se finaliza con return ya que viene implícito
        - Se declara con const (como una variable)
*/

const miFatArrowFunction = (a, b) => a + b ;

const r = miFatArrowFunction(1, 5);

const otraFAF = (a, b) => {
    return a + b
}



const r2 = otraFAF(5, 5);


console.log(r);
console.log(r2);

// Funciones anónimas

/*
    - funciones que no tienen nombre
    - Se utilian en un contexto para que esta sea usada por otra función
*/ 


function sumar(a,b, cb){
    const r = a + b;
    cb(r);
}

sumar(2, 3, function (r) {
    console.log('soy una función anómina y mi resultado es: '+ r)
})

function iterar (a, ab){
    for(let i = 0; i < a.length; i++){
        const listado = a[i];
        ab(listado);
    }
}

lista = ["hola",2,3];

iterar(lista, function (listado){
    console.log('soy una función anónima que imprime iteraciones: '+listado)
})