import React from "react";
import todoStore from '../stores/ListStore';

const FormAdd = () => {
    const [text, setText] = React.useState('');

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const handleAddTodo = () => {
        if (text) {
            todoStore.addTodoItem(text);
        }
        setText('');
    };

    return (
        <>
            <input type="text" value={text} onChange={handleChangeText}/>
            <button onClick={handleAddTodo}>add</button>
        </>

    )
}

export default FormAdd;