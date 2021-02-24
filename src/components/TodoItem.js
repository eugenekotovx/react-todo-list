import { Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
function TodoItem(props) {
  const todo = props.todo;
  return (
    <Box className="todo" mt={2} mb={2} boxShadow={3}>
      <Card>
        <CardContent>
          <Typography align="left" variant="h5" component="h2">
            {todo.title}
          </Typography>
          <Typography align="left">
            {todo.description}
          </Typography>
        </CardContent>
        <CardActions >
          <Button className="todo__status" variant="contained" color="primary" onChange={() => {
            props.updateStatus(todo.id, !todo.done)
          }} startIcon={<DoneIcon />}> Done </Button>
          <Button variant="contained" color="secondary" className="todo__button" onClick={() => {
            props.deleteTodo(todo.id)
          }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default TodoItem