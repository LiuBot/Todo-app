// This object will collect at least one middleware function and connect it to our store (kind of like a root reducer)

import {applyMiddleware} from 'redux';
import TodoMiddleware from './todo_middleware';
import StepMiddleware from  './step_middleware';


const masterMiddleware = applyMiddleware(TodoMiddleware, StepMiddleware);

export default masterMiddleware;