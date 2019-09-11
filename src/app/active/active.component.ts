import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService, ITodoItem, StatusTodo } from '../shared/data.service';

@Component({
    selector: 'Active',
    moduleId: module.id,
    templateUrl: './active.component.html',
})
export class ActiveComponent implements OnInit {
    items: Array<ITodoItem> = [];

    constructor(
        private _router: ActivatedRoute,
        private _dataService: DataService
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.items = this._dataService.getItemsByStatus(StatusTodo.PENDING);
    }

    onItemTap(arg) {
        console.log(arg.index);
        const itemSelected = this.items[arg.index];
        console.log(itemSelected);
    }

    validateStatus(item: ITodoItem) {
        return item.status === StatusTodo.PENDING ? true : false;
    }
}
