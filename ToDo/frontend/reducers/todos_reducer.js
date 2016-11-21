import {RECEIVE_TODOS, REQUEST_TODOS} from "../actions/todo_actions"

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {} // AKA newTodos 
      action.todos.forEach(todo => newState[todo.id] = todo) // sets up key value pairs
      return newState; // the todo data in the store will be replaced by the store in action.todos
    default:
      return state;
  }
};

export default TodosReducer;

// const TodosReducer = (state = {}, action) => {
// 	switch(action.type){
// 		case REQUEST_TODOS:

// 		case RECEIVE_TODOS:

// 		default:
// 			return state;
// 	}
// }

// export default TodosReducer;
