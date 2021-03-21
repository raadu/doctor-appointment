import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component"
import {DoctorListComponent} from "./doctor-list/doctor-list.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/doctorslist",
        pathMatch: "full"
    },
    {
        path: "doctorslist",
        component: DoctorListComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

export const routingComponents = [
    DoctorListComponent,
    NotFoundComponent,
];