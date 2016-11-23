 // This is the entry doc
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

import {requestTodos, createTodo} from "./actions/todo_actions"
import {allTodos, stepsById} from "./reducers/selector"
import {createStep} from './actions/step_actions';
// import {fetchTodos, createTodo} from './util/todo_api_util';


document.addEventListener("DOMContentLoaded", () =>{ // add event listener, pass it a callback 
	const root = document.getElementById('content');
	const store = configureStore(); // returns a new store
	// window.fetchTodos = fetchTodos;
	window.store = store;
	window.allTodos = allTodos;
	window.stepsById = stepsById;
	window.requestTodos = requestTodos;
	window.createTodo = createTodo;
	window.createStep = createStep;
		ReactDOM.render(<Root store={store}/>, root);
})

