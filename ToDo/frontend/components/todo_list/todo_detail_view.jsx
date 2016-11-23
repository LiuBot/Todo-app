import React from 'react';

class TodoDetailView extends React.Component{
	render(){
		const {todo, destroyTodo} = this.props;
			return(
				<div>
					<p className="todo-body">{todo.body}</p>
					<button
						className="delete button"
						onClick={destroyTodo}>Delete</button>
				</div>
				);
	}
}

export default TodoDetailView;
