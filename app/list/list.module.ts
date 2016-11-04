import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
    imports: [
        ListRoutingModule
    ],
    declarations: [
        ListComponent
    ],
    providers: []
})
export class ListModule {}