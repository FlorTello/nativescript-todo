import { Component, OnInit } from '@angular/core';
import { DataService, ITodoItem, StatusTodo } from '../shared/data.service';
import { EventData } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'All',
    moduleId: module.id,
    templateUrl: './all.component.html',
})
export class AllComponent implements OnInit {
    items: Array<ITodoItem>;
    searchValue: string;

    constructor(private _itemService: DataService) {}

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onClickAdd(args: EventData) {
        console.log(args);
    }

    onSearchSubmit(args: EventData) {
        const term = this.searchValue.trim();
        const toLowerCase = (source: string) => source.toLowerCase();
        const includes = (source: string) => source.includes(toLowerCase(term));
        const byNameDescription = ({ name = '', descriptiom = '' }) =>
            includes(toLowerCase(name)) || includes(descriptiom);

        const searchResults = this.items.filter(byNameDescription);

        console.log(term);
    }

    validateStatus(item: ITodoItem) {
        return item.status === StatusTodo.PENDING ? true : false;
    }
}
