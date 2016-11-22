
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


