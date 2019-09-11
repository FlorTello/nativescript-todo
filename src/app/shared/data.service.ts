import { Injectable } from '@angular/core';

export enum StatusTodo {
    COMPLETED = 'completed',
    PENDING = 'pending',
}

export interface ITodoItem {
    id: number;
    name: string;
    description: string;
    status: StatusTodo;
}

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private items = new Array<ITodoItem>(
        {
            id: 1,
            name: 'Item 1',
            description: 'Description for Item 1',
            status: StatusTodo.COMPLETED,
        },
        {
            id: 2,
            name: 'Item 2',
            description: 'Description for Item 2',
            status: StatusTodo.PENDING,
        },
        {
            id: 3,
            name: 'Item 3',
            description: 'Description for Item 3',
            status: StatusTodo.COMPLETED,
        },
        {
            id: 4,
            name: 'Item 4',
            description: 'Description for Item 4',
            status: StatusTodo.COMPLETED,
        },
        {
            id: 5,
            name: 'Item 5',
            description: 'Description for Item 5',
            status: StatusTodo.PENDING,
        },
        {
            id: 6,
            name: 'Item 6',
            description: 'Description for Item 6',
            status: StatusTodo.PENDING,
        }
    );

    getItems(): Array<ITodoItem> {
        return this.items;
    }

    getItemsByStatus(status: StatusTodo): Array<ITodoItem> {
        return this.items.filter((item: ITodoItem) => item.status === status);
    }

    getItem(id: number): ITodoItem {
        return this.items.find(item => item.id === id);
    }
}
