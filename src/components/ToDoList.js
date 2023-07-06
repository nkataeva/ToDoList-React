import todoStore from '../stores/ListStore';
import { observer } from 'mobx-react-lite';
import { FaEdit } from "react-icons/fa";
import ControlButtons from './ControlButtons';
import FormAdd from './FormAdd';

const ToDoList = observer(() => {
  

  const handleRemoveTodo = (index) => {
    todoStore.removeTodoItem(index);
  };

  const handleCompleteTodo = (index) => {
    todoStore.completeTodoItem(index);
  };

  const handleUpdateTodo = (index) => {
    const newText = prompt('Enter the updated text:');
    if (newText) {
      todoStore.updateTodoItem(index, newText);
    }
  };

  return (
    <div>
      <ControlButtons/>
      <FaEdit />
      <FormAdd/>

      {todoStore.todos.map((todo, index) => (
        <div
          key={index}
          style={{ backgroundColor: todo.highlighted ? 'yellow' : 'transparent' }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCompleteTodo(index)}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(event) => handleUpdateTodo(index, event.target.value)}
          />
          <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
});

export default ToDoList;