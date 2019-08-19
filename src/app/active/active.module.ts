import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule } from "./active-routing.module";
import { ActiveComponent } from "./active.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule
    ],
    declarations: [
        ActiveComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ActiveModule { }
