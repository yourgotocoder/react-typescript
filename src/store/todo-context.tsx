import React, { useState } from "react";
import Todo from "../models/todo.model";

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (todoText: string): void => {
        const newTodos = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodos);
        });
    };
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };
    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };
    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
