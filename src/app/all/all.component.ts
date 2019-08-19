import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { EventData } from "tns-core-modules/ui/page/page";

@Component({
    selector: "All",
    moduleId: module.id,
    templateUrl: "./all.component.html"
})
export class AllComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onClickAdd(args: EventData) {
      console.log(args);
    }
}
