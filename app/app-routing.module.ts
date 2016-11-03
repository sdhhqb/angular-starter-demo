import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'add', loadChildren: 'app/add/add.module#AddModule'},
    // {path: 'list', loadChildren: 'app/list/list.module#ListModule'},
    {path: 'about', loadChildren: 'app/about/about.module#AboutModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}