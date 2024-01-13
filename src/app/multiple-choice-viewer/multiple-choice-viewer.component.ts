import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { MultipleChoice, MultipleChoiceViewModel, buildMultipleChoiceViewModels } from '../multiple-choice/multiple-choice.view-model';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
    selector: 'app-multiple-choice-viewer',
    standalone: true,
    imports: [MatCardModule, MultipleChoiceComponent, StepperComponent],
    templateUrl: './multiple-choice-viewer.component.html',
    styleUrl: './multiple-choice-viewer.component.css'
})
export class MultipleChoiceViewerComponent {

    private _json!: string;
    private _viewModels!: MultipleChoiceViewModel[];

    private _currentQuestionNumber = 0;

    @Input({ required: true })
    public get json() {
        return this._json;
    }

    public set json(value: string) {
        this._json = value;

        const multipleChoices = this._buildMultipleChoices(this._json);

        this._viewModels = buildMultipleChoiceViewModels(multipleChoices);
    }

    public get viewModels() {
        return this._viewModels;
    }

    public get currentQuestionNumber() {
        return this._currentQuestionNumber;
    }

    constructor() { }

    public handleSelectedIndexChanged(value: number) {
        this._currentQuestionNumber = value;
    }

    private _buildMultipleChoices(json: string): MultipleChoice[] {

        if (json === '')
            return [];

        try {

            // SKTODO: This is bad, we need to make this type safe by making sure the json we receive has the same shape we want.
            const multipleChoices = JSON.parse(json) satisfies MultipleChoice[];
            return multipleChoices as MultipleChoice[];

        } catch (error) {
            console.log('Bad JSON');
            return [];
        }
    }
}