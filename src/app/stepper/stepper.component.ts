import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button'
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-stepper',
    standalone: true,
    imports: [MatButtonModule, MatProgressBarModule],
    templateUrl: './stepper.component.html',
    styleUrl: './stepper.component.css'
})
export class StepperComponent {

    private _items!: unknown[];
    private _currentIndex = 0;
    private _maxIndex!: number;

    private _currentProgress = 0;

    @Input()
    public color: ThemePalette = 'primary';

    @Input({ required: true })
    public set items(value: unknown[]) {
        this._items = value;

        this._maxIndex = this._items.length - 1;
    }

    @Output()
    public selectedIndexChanged = new EventEmitter<number>;

    public get currentProgress() {
        return this._currentProgress;
    }

    public get isPreviousDisabled() {
        return this._currentIndex === 0;
    }

    public get isNextDisabled() {
        return this._currentIndex === this._maxIndex;
    }

    constructor() { }

    public previous() {
        this._currentIndex--;
        this._currentProgress = this._getPercentage(this._currentIndex, this._maxIndex);
        this.selectedIndexChanged.emit(this._currentIndex);
    }

    public next() {
        this._currentIndex++;
        this._currentProgress = this._getPercentage(this._currentIndex, this._maxIndex);
        this.selectedIndexChanged.emit(this._currentIndex);
    }

    private _getPercentage(current: number, total: number) {
        return (current / total) * 100;
    }
}
