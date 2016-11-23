// Import REQUEST_TODOS and RECEIVE_TODOS from your todo_actions file.

// Refer to the Middleware reading and set up the basic structure of a redux middleware function.

// Implement a switch statement on action.type with a default that simply calls next with the
//  action given to it.

// Now let's add a case for REQUEST_TODOS that console.logs "here is where todos would be fetched".
// Export your TodoMiddleware.


import {REQUEST_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO, 
	receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';

import {fetchTodos, createTodo, updateTodo, destroyTodo} from '../util/todo_api_util';

const TodoMiddleware = ({dispatch}) => next => action => { 
		let success = null; 
		let error = e => console.log(e); // same error callback for all cases 
		
	switch(action.type){
		case REQUEST_TODOS:
			success = data => dispatch(receiveTodos(data));
			fetchTodos(success,error);
			return next(action);

		case CREATE_TODO:
			success = data => dispatch(receiveTodo(data));
			createTodo(action.todo, success, error);
			return next(action);

		case UPDATE_TODO:
			success = data => dispatch(receiveTodo(data)); //call your new API utility function updateTodo and pass 
			//receiveTodo as its success callback
			updateTodo(action.todo, success)
			return next(action);


		case DESTROY_TODO: // call your new API utility function destroyTodo and pass removeTodo as its success callback
			success = data => dispatch(removeTodo(data))
			destroyTodo(action.todo, success)
			return next(action);	

		default: 
			return next(action)
	}
}


export default TodoMiddleware;