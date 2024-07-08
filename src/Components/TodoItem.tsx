import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

type PropsType = {
  todo : TodoItemType;
  deleteHandler : (id: TodoItemType["id"]) => void
  completeHandler : (id: TodoItemType["id"]) => void
}

const TodoItem = ({todo,deleteHandler,completeHandler} : PropsType) => {
  return (
    <Paper sx={{padding : '1rem'}}>

      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>

        <Button onClick={()=> deleteHandler(todo.id)}>Delete</Button>
        <Button >Edit</Button>
    {/* <div> {todo.id} </div> */}
      </Stack>
    </Paper>
  )
}

export default TodoItem;
