import {connect} from 'react-redux';
import TodoDetailView from "./todo_detail_view"; // presentational compnent

import {destroyTodo} from '../../actions/todo_actions'; //action creator

const mapDispatchToProps = (dispatch) => ({
	destroyTodo: () => dispatch(destroyTodo(todo)) // giving TodoDetailView destroyTodo function as a prop
})

export default connect( // Pass your mapStateToProps and mapDispatchToProps functions to connect
	null, 
	mapDispatchToProps
	)(TodoDetailView)