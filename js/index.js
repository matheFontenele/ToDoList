const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#input-todo');
const todoList = document.querySelector('#todo-list');
const tollBar = document.querySelector('#tollbar');
const todoEdit = document.querySelector('#edit-form');
const editInput = document.querySelector('#input-edit');
const btnCancelEdit = document.querySelector('#cancel-edit-btn');


//Variaveis para edição, titulo antes e depois da edição
let preEdition;



//Funções
//Função para salvar novo valor do input editado
const upadateTodo = (text) => {
    const todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3');

        if(todoTitle.innerText === preEdition){
            todoTitle.innerText = text;
        }
    })

}
//Função para exibir e ocultar containers
const showCloseForms = () => {
    todoEdit.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
    tollBar.classList.toggle('hide');
}
//Função para adicionar uma nova tarefa
const saveTodo = (inputValue) => {
    inputValue = todoInput.value

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = inputValue;
    todo.appendChild(todoTitle);

    const spanBtns = document.createElement('span');
    spanBtns.classList.add('spansBtns');
    todo.appendChild(spanBtns);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('check-todo');
    doneBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
    spanBtns.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="bi bi-pencil"></i>';
    spanBtns.appendChild(editBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-todo');
    cancelBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
    spanBtns.appendChild(cancelBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

}

//Função dos botões inseridos remotamente pelo JS
document.addEventListener('click', (e) => {
    const targetBtn = e.target
    const parentChange = targetBtn.closest('div');
    let todoTitle;

    if(parentChange && parentChange.querySelector('h3')){
        todoTitle = parentChange.querySelector('h3').innerText;
    }

    if(targetBtn.classList.contains('check-todo')){
        parentChange.classList.toggle('done');
    }

    if(targetBtn.classList.contains('cancel-todo')){
        parentChange.remove();
    }

    if(targetBtn.classList.contains('edit-todo')){
        showCloseForms();
        
        editInput.value = todoTitle;
        preEdition = todoTitle;
    }
    
})


//Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todoResult = todoInput.value;

    if(todoResult){
        saveTodo(todoResult);
    }
})

btnCancelEdit.addEventListener('click', (e) => {
    e.preventDefault();
    showCloseForms();
})

todoEdit.addEventListener('submit', (e) => {
    e.preventDefault();

    const newValueInput = editInput.value

    if(editInput){
        upadateTodo(newValueInput);
    }
    showCloseForms();
})