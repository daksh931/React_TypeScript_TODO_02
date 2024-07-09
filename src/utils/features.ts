export const saveTodosLocal = (todos:TodoItemType[]):void =>{
    localStorage.setItem("todoList",JSON.stringify(todos));
}