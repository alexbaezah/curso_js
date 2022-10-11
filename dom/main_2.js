// guardaremos todo dentro de un arreglo


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
        //console.log(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i = 0; i < todos.length; i++){
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }
    }

}