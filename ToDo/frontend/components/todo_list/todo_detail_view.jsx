import React from 'react';

class TodoDetailView extends React.Component{
	render(){
		const {todo, destroyTodo} = this.props;
			return(
				<div>
					<p>{todo.body}</p>
					<button
						onClick={destroyTodo}>Delete</button>
				</div>
				);
	}
}

export default TodoDetailView;
