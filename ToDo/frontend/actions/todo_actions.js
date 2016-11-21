export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const requestTodos = () => ({ //We don't need to pass any information in order for this request to succeed
  type: REQUEST_TODOS
});


export const receiveTodos = (todos) => ({
	type: RECEIVE_TODOS,
	todos
})

