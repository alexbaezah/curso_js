// con window.onload espera a que cargue
// los elementos html y luego carga el js
window.onload = () => {

    const parrafo = document.getElementById('text');

/*
    console.log(parrafo.);
    con esto accedemos al <p></p>, pero
    nos trae todo con etiquetas

    con innerHtml saca eso y solo trae
    el string
*/

// también podemos cambiar el texto del innerHtml
console.log(parrafo.innerHTML);
parrafo.innerText = 'hola texto actualizado';
console.log(parrafo.innerHTML);

// para agregar contenido tipo html

/*no se debe usar innerText, se usa innerHTML*/

parrafo.innerHTML = "<li> elemento 1 </1> <li>elemento 2</li>"

}





