import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-json-reader',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './json-reader.component.html',
    styleUrl: './json-reader.component.css'
})
export class JsonReaderComponent {

    @Input()
    public color: ThemePalette = 'primary';

    @Output()
    public jsonChanged = new EventEmitter<string>();

    @ViewChild('filePicker', { static: true })
    private _filePicker!: ElementRef<HTMLInputElement>;

    constructor() { }

    protected async handleChange() {

        const files = this._filePicker.nativeElement.files;

        if (files === null || files.length === 0)
            return;

        const file = files[0];
        const text = await this._toJSONStr(file);

        this.jsonChanged.emit(text);
    }

    private _toJSONStr(file: File): Promise<string> {

        return new Promise((resolve, reject) => {

            const reader = new FileReader();
            reader.readAsText(file);

            reader.onload = () => {

                if (typeof reader.result !== 'string')
                    throw new Error('The result type should only be string');

                resolve(reader.result);
            };

            reader.onerror = error => reject(error);
        });
    }

}