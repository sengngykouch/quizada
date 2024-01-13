import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { MultipleChoiceViewModel } from './multiple-choice.view-model';

@Component({
    selector: 'app-multiple-choice',
    standalone: true,
    imports: [FormsModule, MatRadioModule, MatButtonModule],
    templateUrl: './multiple-choice.component.html',
    styleUrl: './multiple-choice.component.css'
})
export class MultipleChoiceComponent {

    private _multipleChoice!: MultipleChoiceViewModel;

    @Input()
    public get multipleChoice() {
        return this._multipleChoice;
    }

    public set multipleChoice(value: MultipleChoiceViewModel) {
        this._multipleChoice = value;
    }

    constructor() { }
}
