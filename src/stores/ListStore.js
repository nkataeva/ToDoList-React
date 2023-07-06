import { observable, action, makeObservable } from "mobx";

export class ToDoStore {
    todos = [];

    addTodoItem = (text) => {
        this.todos.push({ text, completed: false, highlighted: false });
    };

    removeTodoItem = (index) => {
        this.todos.splice(index, 1);
    };

    completeTodoItem = (index) => {
        const todo = this.todos[index];
        this.todos.splice(index, 1);
        this.todos.push(todo);
    };

    updateTodoItem = (index, newText) => {
        this.todos[index].text = newText;
    };

    changeHighlight(index) {
        this.todos[index].highlighted = !this.todos[index].highlighted;
    }

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodoItem: action,
            removeTodoItem: action,
            completeTodoItem: action,
            updateTodoItem: action,
            changeHighlight: action
        })
    }
}

const todoStore = new ToDoStore();

export default todoStore;