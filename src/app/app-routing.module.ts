import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(allTab:all/default//allTab:all/default//completedTab:completed/default)",
        pathMatch: "full"
    },

    {
        path: "all",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/all/all.module#AllModule",
        outlet: "allTab"
    },
    {
        path: "active",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/active/active.module#ActiveModule",
        outlet: "activeTab"
    },
    {
        path: "completed",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/completed/completed.module#CompletedModule",
        outlet: "completedTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
