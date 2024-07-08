import { AppBar, Container, Toolbar, Typography, Stack, TextField, Button } from '@mui/material'
import TodoItem from './Components/TodoItem'
import { useState } from 'react'

const App = () => {

  const [todos,setTodos] = useState<TodoItemType[]>([]);
  const [title,setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]) : void => {
    alert(id);
    const newTodos : TodoItemType[]= todos.map((i)=> {
      if(i.id === id) i.isCompleted = ! i.isCompleted;
      return i;
    });
  }

  const deleteHandler = (id: TodoItemType["id"]):void => { 
    alert(id);
  }
  return (
   <div>
      <Container maxWidth="sm" >
        <AppBar position='static'>
          <Toolbar>
            <Typography>Todo App</Typography>
          </Toolbar>
        </AppBar>


        <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem deleteHandler={deleteHandler} completeHandler={completeHandler}
          key={i.id}
          todo={i}/>
        ))
      }
      </Stack>
      <TextField value={title} onChange={(e)=> setTitle(e.target.value)} fullWidth label={"New Task"}/>
      <Button sx={{margin: "1rem 0"}} onSubmit={submitHandler} >ADD</Button>
        </Container>
   </div>
  )
}

export default App
