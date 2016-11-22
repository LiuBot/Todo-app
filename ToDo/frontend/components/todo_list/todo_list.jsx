import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{

	componentDidMount(){
		this.props.requestTodos();
	}

	render(){
		const {todos, createTodo, updateTodo, destroyTodo} = this.props;
		return(
		<div> 
			<ul>
				{
					todos.map(todo =>(
						<TodoListItem 
						key={todo.id} 
						todo={todo}
						updateTodo={updateTodo}/>)
			)}
			</ul>
					<TodoForm createTodo={createTodo}/> 
		</div>
			)
	}
}

export default TodoList;