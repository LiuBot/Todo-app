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
import TodoDetailViewContainer from './todo_list/todo_detail_view_container';

class TodoListItem extends React.Component{
	constructor(props){
		super(props);//pass props into the constructor if you intend on using this.props inside the constructor
		this.toggleDone = this.toggleDone.bind(this);
		this.toggleDetail = this.toggleDetail.bind(this);
		this.state = {detail: false};
	}

	toggleDone(e){
		e.preventDefault();
		let {todo, updateTodo} = this.props;
		todo.done = !todo.done;
		this.props.updateTodo(todo);
	}

	toggleDetail(e){
		e.preventDefault();
		this.setState({detail: !this.state.detail})
	}

	render(){
		const {todo} = this.props;
		let detail;
		if (this.state.detail){
			detail= <TodoDetailViewContainer todo={todo} />;
		}

		return(
		<li
			onClick={this.toggleDetail}>{todo.title}
				<button
					onClick={this.toggleDone}>
					{todo.done ? "Done" : "Undone"}
				</button>

				{detail}
			</li>
			)
	}
}


export default TodoListItem;