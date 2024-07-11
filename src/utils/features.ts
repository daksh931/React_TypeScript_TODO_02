export const saveTodosLocal = (todos:TodoItemType[]):void =>{
    localStorage.setItem("todoList",JSON.stringify(todos));
}

export const getTodos = () : TodoItemType[]=> {
    const todos = localStorage.getItem("todoList");
    return todos?JSON.parse(todos):[];
}