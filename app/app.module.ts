import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        HighlightDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }