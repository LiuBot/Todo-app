// THIS IS: Refactoring of the <ul>/<li> structure so that each list item is a TodoListItem component
// that receives the appropriate item as a prop. Each TodoListItem will render
// the title of its item inside an <li>.

////////////

// Pass those functions as props to your TodoListItem components

// Render buttons that call those functions onClick

// The Done or Undo button should display the current state of the todo item
// Hint: Write a helper method to update the todo item's done attribute when the button is clicked

// Call updateTodo to change the status of the todo item

import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component{
	constructor(props){
		super(props);//pass props into the constructor if you intend on using this.props inside the constructor
		this.toggleDone = this.toggleDone.bind(this);
	}

	toggleDone(e){
		e.preventDefault();
		let {todo, updateTodo} = this.props;
		todo.done = !todo.done;
		this.props.updateTodo(todo);
	}

	render(){
		const {todo} = this.props;
		return(
		<li>{todo.title}
		<button
			onClick={this.toggleDone}>
			{todo.done ? "Done" : "Undone"}
		</button>
		</li>
			)
	}
}


export default TodoListItem;