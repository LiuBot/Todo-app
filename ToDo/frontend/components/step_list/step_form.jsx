// This will dispatch new action types 

// Uses controlled inputs to keep track of its form data 

import React from 'react'; 

class StepForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			title: "",
      todo_id: this.props.todo_id,
			done: false
		}
  	 this.createStep = this.createStep.bind(this); // no autobinding in ES6 so need to do this
  	 this.updateStep = this.updateStep.bind(this);
  }

  updateStep(e){
  	this.setState({title: e.target.value})
  }

  createStep(e){
  	e.preventDefault();
  	const step = Object.assign({}, this.state);
  	this.props.createStep(step);
  	//reset form 
  	this.setState({
  		title: "",
  	})
  }

  render(){
  	let {title, done} = this.state; // so you don't have to keep calling this.state.title, etc.

  	return(
  		<form 
      className="step-form"
      onSubmit={this.createStep}>

  		<label>Add Step</label>
  			<input type='text'
        className="step-input"
        value={title}
  			placeholder="i.e. Do google search"
  			onChange= {this.updateStep}
        required/>
  			<br />
  		<button
        className="step button">+ Add Step</button>
  		</form>
  		)
  }
 
};

export default StepForm;