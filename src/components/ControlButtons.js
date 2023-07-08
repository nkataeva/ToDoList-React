import todoStore from '../stores/ListStore';
import { observer } from 'mobx-react-lite';
import s from '../styles/ControlButtons.module.scss'

const ControlButtons = observer(() => {


    const handleRemoveFirst = () => {
        if (todoStore.todos.length > 0) {
            todoStore.removeTodoItem(0);
        }
    };

    const handleRemoveLast = () => {
        const lastIndex = todoStore.todos.length - 1;
        if (lastIndex >= 0) {
            todoStore.removeTodoItem(lastIndex);
        }
    };

    const handleEvenItemsHighlight = () => {
        todoStore.todos.forEach((todo, index) => {
            if ((index + 1) % 2 === 0) {
                todoStore.changeHighlight(index);
            }
        });
    };

    const handleOddItemsHighlight = () => {
        todoStore.todos.forEach((todo, index) => {
            if ((index + 1) % 2 !== 0) {
                todoStore.changeHighlight(index);
            }
        });
    };

    return (
        <div className={s.buttons}>
            <div className={s.left}>
                <button className={s.button} onClick={handleRemoveFirst}>Remove First</button>
                <button className={s.button} onClick={handleRemoveLast}>Remove Last</button>
            </div>
            <div className={s.right}>
                <button className={s.button} onClick={handleEvenItemsHighlight}>Highlight Even</button>
                <button className={s.button} onClick={handleOddItemsHighlight}>Highlight Odd</button>
            </div>

        </div>
    )
})

export default ControlButtons;