/// <reference types="vite/client" />

type TodoItemType = {
    title : string,
    isCompleted : boolean;
    id: number;
};

//now you can use this type anywhere without importing it