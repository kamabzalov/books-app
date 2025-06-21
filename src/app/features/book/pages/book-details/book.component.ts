import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Book } from '@app/core/models/book'
import { MatCardModule } from '@angular/material/card'

@Component({
    selector: 'books-book',
    imports: [MatCardModule],
    templateUrl: './book.component.html',
    styleUrl: './book.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
    protected book: Book | null = null
    private route = inject(ActivatedRoute)

    public ngOnInit() {
        if (this.route.snapshot.data['book']) {
            this.book = this.route.snapshot.data['book'] as Book
        }
    }
}
