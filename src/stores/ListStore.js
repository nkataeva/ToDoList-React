import { observable, action, makeObservable, computed } from "mobx";
import { initData } from "./initData";

export class ToDoStore {
    todos = [];

    get getTodoItem() {
        return (index) => this.todos[index];
    }

    addTodoItem = (text) => {
        this.todos.unshift({ text, completed: false, highlighted: false });
    };

    removeTodoItem = (index) => {
        this.todos.splice(index, 1);
    };

    completeTodoItem = (index) => {
        const todo = this.todos[index];
        todo.completed = !todo.completed
        
    };

    sortTasksByChecked = () => {
        this.todos.sort((a, b) => {
            if (a.completed === b.completed) {
                return 0;
            } else if (a.completed === false) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(this.todos)
    }

    updateTodoItem = (index, newText) => {
        this.todos[index].text = newText;
    };

    changeHighlight(index) {
        this.todos[index].highlighted = !this.todos[index].highlighted;
    }

    init() {
        this.todos = [...initData];
        this.sortTasksByChecked();
    }

    constructor() {
        makeObservable(this, {
            todos: observable,
            getTodoItem: computed,
            addTodoItem: action,
            removeTodoItem: action,
            completeTodoItem: action,
            sortTasksByChecked: action,
            updateTodoItem: action,
            changeHighlight: action,
        })
        this.init();
    }
}

const todoStore = new ToDoStore();

export default todoStore;