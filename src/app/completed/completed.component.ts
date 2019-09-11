import { Component, OnInit } from '@angular/core';
import { DataService, ITodoItem, StatusTodo } from '../shared/data.service';

@Component({
    selector: 'Completed',
    moduleId: module.id,
    templateUrl: './completed.component.html',
})
export class CompletedComponent implements OnInit {
    items: Array<ITodoItem> = []
    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {
        this.items = this._dataService.getItemsByStatus(StatusTodo.COMPLETED);
    }
}
