import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'books-book',
    imports: [],
    templateUrl: './book.component.html',
    styleUrl: './book.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {}
