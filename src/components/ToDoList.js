import { observer } from 'mobx-react-lite';
import ControlButtons from './ControlButtons';
import FormAdd from './FormAdd';
import List from './List';
import s from '../styles/ToDoList.module.scss'

const ToDoList = observer(() => {

  return (
    <div className={s['container-list']}>
      <p id={s.title}>To Do List</p>
      {/* <ControlButtons /> */}
      <FormAdd />
      <List />
    </div>
  );
});

export default ToDoList;