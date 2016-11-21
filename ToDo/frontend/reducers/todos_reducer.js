// reducers manage the shape of our application state.
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
