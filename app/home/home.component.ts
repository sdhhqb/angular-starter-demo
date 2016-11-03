import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: []
})
export class HomeComponent implements OnInit {
    initFlag: boolean = false;

    constructor() {

    }

    ngOnInit () {
        this.initFlag = true;
    }
}