import { Injectable } from '@angular/core';

export class Todo {
    constructor(
        public id: number,
        public name: string,
        public date: string,
        public finish: boolean
    ) {}
}

const FETCH_LATENCY = 200;

var todoStore = JSON.stringify([
    {id: 1, name: 'breakfast', date: '2016-11-04 14:02:25', finish: false},
    {id: 2, name: 'launch', date: '2016-11-04 14:03:25', finish: false},
    {id: 3, name: 'supper', date: '2016-11-04 14:04:25', finish: false}
]);


@Injectable()
export class TodoService {

    getTodos() {
        var todos = JSON.parse(todoStore);
        return new Promise<Todo[]>(resolve => {
            setTimeout(() => {
                resolve(todos);
            }, FETCH_LATENCY);
        });
    }

    updateTodo(todo) {
        var todos = JSON.parse(todoStore);
        todos.forEach((item, index) => {
            if (item.id == todo.id) {
                todos[index] = todo;
                todoStore = JSON.stringify(todos);
            }
        });
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('ok')
            }, FETCH_LATENCY);
        });
    }
}