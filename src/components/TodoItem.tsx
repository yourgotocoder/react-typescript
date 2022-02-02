import * as React from "react";
import Todo from "../models/todo.model";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
    text: string;
    id: string;
    removeTodo: () => void;
}> = (props) => {
    return (
        <li className={classes.item} onClick={props.removeTodo}>
            {props.text}
        </li>
    );
};

export default TodoItem;
