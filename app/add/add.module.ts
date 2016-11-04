import { NgModule } from '@angular/core';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
    imports: [
        AddRoutingModule
    ],
    declarations: [
        AddComponent
    ],
    providers: []
})
export class AddModule {}