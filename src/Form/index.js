import React, { useState } from "react";
import "./style.css";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFromSubmit = (event) => {
        const trimmedNewTaskContent = newTaskContent.trim();

        event.preventDefault();

        if (trimmedNewTaskContent === "") {
            return
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFromSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;