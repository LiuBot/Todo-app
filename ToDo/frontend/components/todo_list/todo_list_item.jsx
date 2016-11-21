// Refactoring of the <ul>/<li> structure so that each list item is a TodoListItem component
// that receives the appropriate item as a prop. Each TodoListItem will render
// the title of its item inside an <li>.

import React from 'react';

class TodoListItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {todo} = this.props;
		return(
		<li>{todo.title}</li>
			)
	}
}


export default TodoListItem;