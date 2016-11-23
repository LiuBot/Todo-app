import {connect} from 'react-redux';
import StepList from "./step_list"; // presentational compnent
import {createStep} from '../../actions/step_actions';

const mapStateToProps = (state, {todo_id}) =>({
	steps: stepsById(state, todo_id),
	todo_id
})

const mapDispatchToProps = (dispatch, {todo}) =>({
	createStep: step => dispatch(createStep(step)),
})
export default connect( // Pass your mapStateToProps and mapDispatchToProps functions to connect
	mapStateToProps, 
	mapDispatchToProps
	)(StepList)