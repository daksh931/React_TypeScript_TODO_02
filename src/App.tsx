import { AppBar, Container, Toolbar, Typography, Stack, TextField, Button } from '@mui/material'
import TodoItem from './Components/TodoItem'
import { useEffect, useState } from 'react'
import {saveTodosLocal } from './utils/features'
const App = () => {

  const [todos,setTodos] = useState<TodoItemType[]>([]);
  const [title,setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]) : void => {
    // alert(id);
    console.log(todos)
    const newTodos : TodoItemType[]= todos.map((i)=> {
      if(i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    });
    setTodos(newTodos);
  }

  const deleteHandler = (id: TodoItemType["id"]):void => { 
    const newTodos:TodoItemType[] = todos.filter(i=> i.id !== id)
    // alert(id);
    setTodos(newTodos);
    }

  const editHandler = (id: TodoItemType["id"], title:TodoItemType["title"]) : void => {
    // alert(id);
    console.log(todos)
    const newTodos : TodoItemType[]= todos.map((i)=> {
      if(i.id === id) i.title = title;
      return i;
    });
    setTodos(newTodos);
  }
  const submitHandler = () :void=> {
    const newTodo : TodoItemType = {
      title,
      isCompleted:false,
      id: Number(Math.round(Math.random()*100000)),
    };

    setTodos((prev)=> [...prev,newTodo]);
    setTitle("")
    saveTodosLocal(todos)
  };

  useEffect(() => {
    saveTodosLocal(todos)
  }, [todos])
  
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
          <TodoItem deleteHandler={deleteHandler} 
          completeHandler={completeHandler}
          editHandler={editHandler}
          key={i.id}
          todo={i}/>
        ))
      }
      </Stack>
      <TextField value={title} onChange={(e)=> setTitle(e.target.value)} fullWidth 
        label={"New Task"} 
        onKeyDown={(e)=> {
          if (e.key === "Enter" && title !== "") submitHandler();
              }
                } />
      <Button sx={{margin: "1rem 0" }} 
       fullWidth
        variant='contained' 
        onClick={submitHandler} 
        disabled={title===""}>  ADD</Button>
        </Container>
   </div>
  )
}

export default App
