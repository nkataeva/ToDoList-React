import todoStore from '../stores/ListStore';

const ControlButtons = () => {

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
        console.log(todoStore.todos)
        todoStore.todos.forEach((index) => {
            if ((index + 1) % 2 === 0) {
                todoStore.changeHighlight(index);
            }
        });
    };

    const handleOddItemsHighlight = () => {
        todoStore.todos.forEach((todo, index) => {
            if ((index + 1) % 2 !== 0) {
                todoStore.changeHighlight();
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
}

export default ControlButtons;