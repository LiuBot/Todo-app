import React from 'react';

class TodoDetailView extends React.Component{ d
	render(){
		const {todo, destroyTodo} = this.props;
			return(
				<div="detail-view">
					<p>{todo.body}</p>
					<button
						onClick={destroyTodo}>Delete
					</button>
				</div>
				)
	}
}
