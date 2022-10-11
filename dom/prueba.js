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



