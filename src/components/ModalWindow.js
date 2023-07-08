import todoStore from '../stores/ListStore';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import s from '../styles/ModalWindow.module.scss';

const ModalWindow = observer(({ isOpen, index, setIsOpen }) => {
  const [newText, setNewText] = useState('');

  const handleUpdateTodo = () => {
    if (newText) {
      todoStore.updateTodoItem(index, newText);
    }
    closeModal();
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
    setNewText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUpdateTodo();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Изменить задачу"
      className={s.container}
    >
      <div className={s.content}>
        <h3>Изменить задачу</h3>
        <input
          className={s.input}
          type="text"
          value={newText}
          placeholder={todoStore.getTodoItem(index)?.text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className={s.buttonGroup}>
          <button className={s.button} onClick={handleUpdateTodo}>Сохранить</button>
          <button className={s.button} onClick={closeModal}>Закрыть</button>
        </div>

      </div>

    </Modal>
  );
});

export default ModalWindow;