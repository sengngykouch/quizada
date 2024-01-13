import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { JsonReaderComponent } from './json-reader/json-reader.component';
import { MultipleChoiceViewerComponent } from './multiple-choice-viewer/multiple-choice-viewer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule, RouterOutlet, MatToolbarModule, JsonReaderComponent, MultipleChoiceViewerComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    private _json: string = '';

    public readonly title = 'Quizada';

    public get json() {
        return this._json;
    }

    constructor() { }

    protected handleJsonChanged(json: string) {
        this._json = json;
    }
}
