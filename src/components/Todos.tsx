import React, { useContext } from "react";
import Todo from "../models/todo.model";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
    const todosContext = useContext(TodoContext);
    return (
        <ul className={classes.todos}>
            {todosContext.items?.map((item) => (
                <TodoItem
                    text={item.text}
                    key={item.id}
                    id={item.id}
                    removeTodo={todosContext.removeTodo.bind(null, item.id)}
                >
                    {item.text}
                </TodoItem>
            ))}
        </ul>
    );
};

export default Todos;
