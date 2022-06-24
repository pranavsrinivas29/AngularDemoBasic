import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { ChildAComponent } from "../child-a/child-a.component";
import { ChildBComponent } from "../child-b/child-b.component";
import { FirstComponent } from "../first/first.component";
import { YourGuardGuard } from "../your-guard.guard";
import { SecondComponent } from "./second.component";

// routing
const routes:Routes = [
    {path: 'first-component/:id',component:FirstComponent,
    children:[
        {path: 'child-a',component:ChildAComponent},
        {path: 'child-b',component:ChildBComponent}
    ]
    },
    {path:'second-component',canActivate:[YourGuardGuard],
    component:SecondComponent},
    {path:'**',component:FirstComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})


export class AppRoutingModule{}

