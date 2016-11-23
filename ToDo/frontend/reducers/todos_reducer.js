import {RECEIVE_TODOS, 
       REQUEST_TODOS, 
       RECEIVE_TODO,
       REMOVE_TODO} from "../actions/todo_actions";
import merge from 'lodash/merge';


const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){

    case RECEIVE_TODOS:
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;

    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      newState = merge({}, state, newTodo);
      return newState;

    case REMOVE_TODO:
     newState = merge({}, state)
     delete newState[action.todo.id];
     return newState;

    default:
      return state;
  }
};

export default TodosReducer;

// const TodosReducer = (state = {}, action) => {
//  switch(action.type){
//    case REQUEST_TODOS:

//    case RECEIVE_TODOS:

//    default:
//      return state;
//  }
// }

// export default TodosReducer;
