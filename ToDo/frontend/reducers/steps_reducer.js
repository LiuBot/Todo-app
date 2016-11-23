import {RECEIVE_STEPS, 
       RECEIVE_STEP,
       REMOVE_STEP} from "../actions/step_actions";
import merge from 'lodash/merge';


const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){

    case RECEIVE_STEPS:
      action.steps.forEach(step => {
      	newState[step.todo_id] = newState[step.todo_id] || {}; // in case there aren't steps yet
      	newState[step.todo_id][step.id] = step;
      })
      newState = merge({}, state, newState)
      return newState;

    case RECEIVE_STEP:
    	newState[action.step.todo_id] = newState[action.step.todo_id] || {}; // in case there aren't steps yet
      const newStep = {[action.step.todo_id]: action.step.todo_id};
      newState = merge({}, state, newStep);
      return newState;

    case REMOVE_STEP:
			newState[action.step.todo_id] = newState[action.step.todo_id] || {}; // in case there aren't steps yet
     newState = merge({}, state)
     delete newState[action.step.todo_id][action.step.id];
     return newState;

    default:
      return state;
  }
};

export default StepsReducer;


