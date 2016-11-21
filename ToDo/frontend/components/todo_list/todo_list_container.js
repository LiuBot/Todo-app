import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selector'; // selector
import TodoList from "./todo_list"; // presentational compnent
import {requestTodos} from '../../actions/todo_actions'; //action creator

const mapStateToProps = (state) => ({
	todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
	requestTodos: () => dispatch(requestTodos())
})

export default connect( // Pass your mapStateToProps and mapDispatchToProps functions to connect
	mapStateToProps, 
	mapDispatchToProps
	)(TodoList)