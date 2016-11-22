import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

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
						<TodoForm />
		</div>
			)
	}
}

export default TodoList;