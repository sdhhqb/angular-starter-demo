import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})
export class TitleComponent {
    title = 'Angular2 todo app';
}