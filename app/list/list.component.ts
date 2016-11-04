import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from "../core/todo.service";

@Component({
    moduleId: module.id,
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

    todos: Todo[];

    constructor(private todoService: TodoService) {

    }

    ngOnInit () {
        this.todoService.getTodos().then(todos => {
            this.todos = todos;
        });
    }

    toggleTodo (todo: Todo) {
        todo['finish'] = !todo['finish'];
        this.todoService.updateTodo(todo).then(res => {
            console.log(res);
        });
    }
}