import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
    const todoContext = useContext(TodoContext);

    const todoItem = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText: string = todoItem.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        todoContext.addTodo(enteredText);
        todoItem.current!.value = "";
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoItem} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
