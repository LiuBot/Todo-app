import React from 'react';
import TodoListItem from './todo_list_item';

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
						<TodoListItem 
						key={todo.id} 
						todo={todo}/>)
			)}
			</ul>
		</div>
			)
	}
}

export default TodoList;