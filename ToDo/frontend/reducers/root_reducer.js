import {combineReducers} from 'redux';
import TodosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';

const RootReducer = combineReducers ({
	todos: TodosReducer,
	steps: stepsReducer
})

export default RootReducer;