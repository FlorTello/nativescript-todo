import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ActiveRoutingModule } from "./active-routing.module";
import { ActiveComponent } from "./active.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ActiveRoutingModule
    ],
    declarations: [
        ActiveComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ActiveModule { }
