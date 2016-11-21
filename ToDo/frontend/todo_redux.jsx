 // This is the entry doc
import React from 'react';
import ReactDOM from 'react-dom';

import {fetchTodos} from './util/todo_api_util';


document.addEventListener("DOMContentLoaded", () =>{ // add event listener, pass it a callback 
	const root = document.getElementById('content');
	window.fetchTodos = fetchTodos;
	ReactDOM.render(root);
})

