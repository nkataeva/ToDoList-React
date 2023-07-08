import React from "react";
import todoStore from '../stores/ListStore';
import s from '../styles/FormAdd.module.scss'

const FormAdd = () => {
    const [text, setText] = React.useState('');
    const [, setRender] = React.useState();

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    }

    const handleAddTodo = () => {
        if (text) {
            todoStore.addTodoItem(text);
        }
        setText('');
        setRender({});
    };

    return (
        <div className={s['add-form']}>
            <input id={s.input} type="text" value={text} onChange={handleChangeText} onKeyDown={handleKeyDown}/>
            <button id={s.button} onClick={handleAddTodo}>Добавить</button>
        </div>

    )
}

export default FormAdd;