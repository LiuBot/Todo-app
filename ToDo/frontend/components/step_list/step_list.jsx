import React from 'react';
import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component{

	render(){
		const {steps, todo_id, createStep, destroyStep} = this.props;
		return(
		<div> 
		<h4 className="steps-label">Steps</h4>
			<ul>
				{
					steps.map(step =>(
				 <StepListItemContainer
          key={step.id}
          step={step} />))}
			</ul>
					<div
						className="form-container">
					<StepForm 
					todo_id={todo_id}
					createStep={createStep}/> 
					</div>
		</div>
			)
	}
}

export default StepList;