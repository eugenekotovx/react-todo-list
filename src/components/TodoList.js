
import TodoItem from './TodoItem';
import Box from '@material-ui/core/Box'
function TodoList(props) {
    const todos = props.todos
    const todoList = todos.map((todo, index) => {
        
        return <TodoItem key={index} todo={todo} deleteTodo={props.deleteTodo} updateStatus={props.updateStatus} />
    })
    return <Box mt={5}> {todoList} </Box>
}

export default TodoList