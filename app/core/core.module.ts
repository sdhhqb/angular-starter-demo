import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';

import { CommonModule }      from '@angular/common';

import { TitleComponent } from './title.component';
import { TodoService } from './todo.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TitleComponent ],
    exports: [ TitleComponent ],
    providers: [ TodoService ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}