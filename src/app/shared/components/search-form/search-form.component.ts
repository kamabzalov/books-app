import {
    Component,
    DestroyRef,
    EventEmitter,
    inject,
    Input,
    input,
    OnInit,
    Output,
    output,
} from '@angular/core'
import {
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
} from '@angular/material/input'
import { MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { FormControl, FormsModule } from '@angular/forms'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
    selector: 'books-search-form',
    imports: [
        MatSuffix,
        MatFormField,
        MatIcon,
        MatLabel,
        MatIconButton,
        MatInput,
        FormsModule,
    ],
    host: {
        class: 'columns',
    },
    templateUrl: './search-form.component.html',
    styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
    @Input() public placeholder = ''
    @Input() public searchQuery = ''
    @Output() public searchQueryChange = new EventEmitter<string>()

    protected changeSearchQuery() {
        this.searchQueryChange.emit(this.searchQuery)
    }

    resetSearchQuery() {
        this.searchQuery = ''
        this.searchQueryChange.emit('')
    }
}
