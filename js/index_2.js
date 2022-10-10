// Variables

//Se pueden declarar variables de 3 formas

// var
// let 
// const

var saludo = "hola mundo";
console.log(saludo);

// al usar const saludo no se puede
const despedida = "chao mundo"
console.log(despedida);

saludo = "chao ctm";
console.log(saludo);





/* esto nos dará error porque const 
    al ser constante, no puede mutar la variable
    inicializada con const
    Lo otro es que tampoco se puede aplicar a 
    una variable anteriormente creada con var o let

const despedida = "a ver"
console.log(despedida);
*/

/* en resumen, a las variables que se les puede reasignar valores
   son a las que son declaradas con var o let
   mientras que las declaradas con const no se puede
*/

/*

    otro detalle es que una vez declarada la variable
    al siguiente llamado solo se nombra la variable, ya que
    let, const o var son para inicializarla o bien crearlas para
    que usen el espacio en memoria requerido
*/
