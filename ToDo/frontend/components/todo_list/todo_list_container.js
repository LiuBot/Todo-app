import TodoList from "./todo_list"; // presentational compnent
import {connect} from 'react-redux';

// actions to import 
import {requestTodos, createTodo, updateTodo, destroyTodo} from '../../actions/todo_actions'; //action creator
import {allTodos} from '../../reducers/selector'; // selector

const mapStateToProps = (state) => ({
	todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
	requestTodos: () => dispatch(requestTodos()),
	createTodo: todo => dispatch(createTodo(todo)),
	updateTodo: todo => dispatch(updateTodo(todo)),
	destroyTodo: todo => dispatch(destroyTodo(todo))
})

export default connect( // Pass your mapStateToProps and mapDispatchToProps functions to connect
	mapStateToProps, 
	mapDispatchToProps
	)(TodoList)