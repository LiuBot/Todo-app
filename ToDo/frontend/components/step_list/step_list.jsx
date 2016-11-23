import React from 'react';
import StepForm from './step_form';

class StepList extends React.Component{

	render(){
		const {steps, todo_id, createStep, destroyStep} = this.props;
		return(
		<div> 
			<ul>
				{
					steps.map(step =>(
					<li
						key={step.id} 
						step={step}
						updateStep={updateStep}>
						<button>
							
						</button>

						</li>)
			)}
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