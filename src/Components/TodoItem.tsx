import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo : TodoItemType;
  deleteHandler : (id: TodoItemType["id"]) => void
  completeHandler : (id: TodoItemType["id"]) => void
  editHandler : (id: TodoItemType["id"], title: TodoItemType["title"]) => void
}

const TodoItem = ({todo,deleteHandler,completeHandler,editHandler} : PropsType) => {

  const[editActive,setEditActive] = useState<boolean>(false);
  const[textVal,setTextVal] = useState<string>(todo.title)
  

  return (
    <Paper sx={{padding : '1rem'}}>

      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (<TextField value={textVal} 
          onChange={(e)=> setTextVal(e.target.value)}
          onKeyDown={(e) => { 
              if(e.key === "Enter") {
                editHandler(todo.id,textVal),
                setEditActive(!editActive)
                  }                
              }}
          />) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}

        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>

        <Button onClick={()=> deleteHandler(todo.id)}>Delete</Button>
        <Button onClick={()=> setEditActive((prev)=>!prev)}>Edit</Button>
    {/* <div> {todo.id} </div> */}
      </Stack>
    </Paper>
  )
}

export default TodoItem;
