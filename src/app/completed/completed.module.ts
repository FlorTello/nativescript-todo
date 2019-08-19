import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CompletedRoutingModule } from "./completed-routing.module";
import { CompletedComponent } from "./completed.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CompletedRoutingModule
    ],
    declarations: [
        CompletedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CompletedModule { }
