import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
    selector: 'app-field-error',

    template: `
        @let state = field()();
        @if (state.touched() && state.invalid()) {
            <p class="field-error">
                {{ state.errors()[0]?.message }}
            </p>
        }
    `,

    styles: `
        .field-error {
            color: var(--mat-sys-error, #b3261e);
            font-size: 12px;
            margin: 0 0 8px 16px;
        }
    `,
})


export class FieldError {
    readonly field = input.required<FieldTree<unknown>>();
}