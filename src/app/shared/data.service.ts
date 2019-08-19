import { Injectable } from "@angular/core";

export enum StatusTodo {
    COMPETED = "completed",
    PENDING = "pending"
}

export interface IDataItem {
    id: number;
    name: string;
    description: string;
    status: StatusTodo;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1",
            status: StatusTodo.COMPETED
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
            status: StatusTodo.PENDING
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
            status: StatusTodo.COMPETED
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4",
            status: StatusTodo.COMPETED
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5",
            status: StatusTodo.PENDING
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6",
            status: StatusTodo.PENDING
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
