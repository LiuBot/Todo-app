// This will dispatch new action types 

// Uses controlled inputs to keep track of its form data 

import React from 'react'; 

class TodoForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			title: "",
			body: "",
			done: false
		};
  	 this.createTodo = this.createTodo.bind(this); // no autobinding in ES6 so need to do this
  	 this.updateTitle = this.updateTitle.bind(this);
  	 this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e){
  	this.setState({title: e.currentTarget.value})
  }

  updateBody(e){
  	this.setState({body: e.currentTarget.value})
  }

  createTodo(e){
  	e.preventDefault();
  	const todo = Object.assign({}, this.state);
  	this.props.createTodo({todo});
  	//reset form 
  	this.setState({
  		title: "",
  		body: ""
  	})
  }

  render(){
  	let {title, body, done} = this.state; // so you don't have to keep calling this.state.title, etc.

  	return(
  		<form onSubmit ={this.createTodo}>
  		<label>Title</label>
  			<input type='text'
  			value={title}
  			placeholder="i.e. Buy Milk"
  			onChange= {this.updateTitle} />
  			<br />
  		<label>Body</label>
  		<textarea 
  		placeholder="i.e. Get 2% milk from Whole Foods"
  		value={body}
  		onChange={this.updateBody}></textarea>
  			<br />
  		<button>Create Todo!</button>
  		</form>
  		)
  }
 
};

export default TodoForm;