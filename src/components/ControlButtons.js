import todoStore from '../stores/ListStore';
import { observer } from 'mobx-react-lite';

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
        <>
            <button onClick={handleRemoveFirst}>Remove First</button>
            <button onClick={handleRemoveLast}>Remove Last</button>
            <button onClick={handleEvenItemsHighlight}>Highlight Even Items</button>
            <button onClick={handleOddItemsHighlight}>Highlight Odd Items</button>
        </>
    )
})

export default ControlButtons;