
export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};


//sends POST requests to create a new Todo in the database
export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: todo,
    success,
    error
  });
};

export const updateTodo = (todo, success) => {
  $.ajax({
    method:'PATCH',
    url:`api/todos/${todo.id}`, // GOTTA USE BACKTICKS
    data: {todo},
    success
  });
};

export const destroyTodo = (todo, success) => {
  $.ajax({
    method: 'DELETE',
    url:`api/todos/${todo.id}`, // don't need the data since you're just deleting the object
    success
  });
};


