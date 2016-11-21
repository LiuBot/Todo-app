 // This is the entry doc
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {fetchTodos} from './util/todo_api_util';
import {requestTodos} from "./actions/todo_actions"


document.addEventListener("DOMContentLoaded", () =>{ // add event listener, pass it a callback 
	const root = document.getElementById('content');
	const store = configureStore(); // returns a new store
	window.fetchTodos = fetchTodos;
	window.store = store;
	window.requestTodos = requestTodos;
	ReactDOM.render(root);
})

