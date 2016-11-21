
// Export a function named allTodos that receives the entire state as an argument.

// Use Object.keys(state.todos) to get the keys for the state.todos.

// Map the array of todo ids to an array of todos.

export const allTodos = (state) =>(
	Object.keys(state.todos).map(id => state.todos[id]) // get the keys (todo.id)
	)