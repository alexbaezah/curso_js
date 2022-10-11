// guardaremos todo dentro de un arreglo
// acá usaremos .map en reemplazo del for


window.onload = () => {
    const todos = [];
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        // e.prventDefatult() previene que se refresque la pantalla
        e.preventDefault();
        // luego vamos la campo de todo
        const todo = document.getElementById('todo');
        //guardamos el valor en un variable
        //recordar que es un value y no un innerText
        const todoText = todo.value;
        //se reemplaza el valor por un valor vacío, 
        // con el fin de que el input quede vacío o "refrescado"
        todo.value = '';
        todos.push(todoText)
        const todoList = document.getElementById('todo-list');
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
    }

}