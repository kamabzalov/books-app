import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core'
import { MatInput, MatLabel, MatSuffix } from '@angular/material/input'
import { MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
    selector: 'books-search-form',
    imports: [MatSuffix, MatFormFieldModule, MatIcon, MatLabel, MatIconButton, MatInput, FormsModule],
    host: {
        class: 'columns',
    },
    templateUrl: './search-form.component.html',
    styleUrl: './search-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
    @Input() public placeholder = ''
    @Input({ required: true }) query: WritableSignal<string> = signal('')
    @Output() public searchQueryChange = new EventEmitter<string>()

    protected changeSearchQuery(value: string) {
        this.query.set(value)
    }

    resetSearchQuery(searchField: HTMLInputElement) {
        this.query.set('')
        searchField.value = ''
    }
}
