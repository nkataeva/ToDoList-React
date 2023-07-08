import todoStore from '../stores/ListStore';
import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import { VscChromeClose, VscEdit } from "react-icons/vsc";
import { observer } from 'mobx-react-lite';
import s from '../styles/List.module.scss'

const List = observer(() => {
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = (index) => {
        todoStore.completeTodoItem(index);
        todoStore.sortTasksByChecked();
    };

    const handleRemoveTodo = (index) => {
        todoStore.removeTodoItem(index);
    };

    const handleEditClick = (index) => {
        setEditTaskIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div id={s.list}>
            {todoStore.todos.map((todo, index) => (
                <div
                    className={`${s.el} ${todo.highlighted ? s.highlighted : ''}`}
                    // className={s.el}
                    key={index}>
                    <input
                        className={s.checkbox}
                        id={s.input}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(index)} />

                    <p className={`${s.text} ${todo.completed ? s.completed : ''}`}>{todo.text}</p>
                    <button className={s.button} onClick={() => handleEditClick(index)}>
                        <VscEdit className={s.icon} />
                    </button>
                    <button className={s.button} onClick={() => handleRemoveTodo(index)}>
                        <VscChromeClose className={s.icon} />
                    </button>
                </div>
            ))}

            <ModalWindow
                isOpen={isModalOpen}
                index={editTaskIndex}
                setIsOpen={setIsModalOpen}
            />
        </div>
    );
});

export default List;
