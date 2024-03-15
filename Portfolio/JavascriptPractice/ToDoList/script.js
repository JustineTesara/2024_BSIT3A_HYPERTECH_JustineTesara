const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

function addTodo(text) {
  const newTodoItem = document.createElement('li');
  newTodoItem.innerText = text;

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', function() {
    newTodoItem.classList.toggle('completed');
  });

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', function() {
    todoList.removeChild(newTodoItem);
  });

  newTodoItem.appendChild(completeButton);
  newTodoItem.appendChild(removeButton);

  todoList.appendChild(newTodoItem);
}

addButton.addEventListener('click', function() {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    addTodo(newTodoText);
    newTodoInput.value = '';
  }
});