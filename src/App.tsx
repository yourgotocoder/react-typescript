import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/todo-context";

function App() {
    return (
        <TodoContextProvider>
            <NewTodo />
            <Todos></Todos>
        </TodoContextProvider>
    );
}

export default App;
