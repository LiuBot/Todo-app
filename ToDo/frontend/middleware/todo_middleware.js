// Import REQUEST_TODOS and RECEIVE_TODOS from your todo_actions file.

// Refer to the Middleware reading and set up the basic structure of a redux middleware function.

// Implement a switch statement on action.type with a default that simply calls next with the
//  action given to it.

// Now let's add a case for REQUEST_TODOS that console.logs "here is where todos would be fetched".
// Export your TodoMiddleware.


import {REQUEST_TODOS, RECEIVE_TODOS, receiveTodos} from '../actions/todo_actions';
import {fetchTodos} from '../util/todo_api_util';

const TodoMiddleware = store => next => action => { 
	switch(action.type){
		case REQUEST_TODOS:
			const success = data => dispatch(receiveTodos(data));
			const error = e => console.log(e);
			fetchTodos(success,error);
			return next(action);
		default:
			return next(action)
	}
}


export default TodoMiddleware