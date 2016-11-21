import React from 'react';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.requestTodos();
	}

	render(){
		const {todos} = this.props;
		return(
		<div> 
			<ul>
				{
					todos.map(todo =>(
					<li key={todo.id}>{todo.title}</li>
					)
			)}
			</ul>
		</div>
			)
	}
}

export default TodoList;