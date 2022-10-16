const lista = [1,2,3]

const suma = (ns) =>{
    let acumulado = 0;
    for(let i = 0; i < ns.length; i++){
        acumulado += ns[i];
    }
    return acumulado
}

const listaSumada = suma(lista);
console.log('lista sumada es: '+listaSumada);

const multiplicados = lista.map(x => x * 2)
console.log('matriz multiplicada por 2 y con map: '+ multiplicados)

const objMascotas = [
    {nombre: 'puchini', edad: 8, tipo: 'perro'},
    {nombre: 'Lynda', edad:6 , tipo: 'perro'},
    {nombre: 'Ryu', edad: 6 , tipo: 'gato'},
    {nombre: 'Brocoli', edad: 4 , tipo: 'ave'},
]


const edades = objMascotas.map(x => x.edad);
console.log(edades);
const sumaEdades = suma(edades);
console.log('El promedio de la edad de las mascotas es: '+sumaEdades/edades.length);

const iteracion = lista.map(l =>  l);
console.log(iteracion.join(' '));

// uso de splice
// splice() se le entregan dos argumentos
// el primer es la fila que se quiere eliminar 
// el 2do cuantos. 0, 1 sería solo el elemento cero
// 0, 2, sería solo los dos primeros elementos (0 y 1)
const corte = lista.splice(0, 1)
// acá nos imprimo [1], lo que quiere decir que 
// capturamos ese elemento, que a su vez 
// ya no estará en el array
console.log(corte);
console.log(lista);



