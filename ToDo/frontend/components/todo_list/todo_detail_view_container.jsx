import {connect} from 'react-redux';
import TodoDetailView from "./todo_detail_view"; // presentational compnent
import {destroyTodo} from '../../actions/todo_actions'; //action creator
import {requestSteps} from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, {todo}) => ({
	destroyTodo: () => dispatch(destroyTodo(todo)),
	requestSteps: ()=> dispatch(requestSteps(todo.id))
})

export default connect( // Pass your mapStateToProps and mapDispatchToProps functions to connect
	null, 
	mapDispatchToProps
	)(TodoDetailView)