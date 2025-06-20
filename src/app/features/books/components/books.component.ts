import { Component, OnInit } from '@angular/core'
import { SearchFormComponent } from '@app/shared/components/search-form/search-form.component'
import { BooksService } from '@app/core/services/books.service'
import { Observable, of } from 'rxjs'
import { Book } from '@app/core/models/book'
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list'
import { AsyncPipe } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'books-books',
    imports: [
        SearchFormComponent,
        MatList,
        MatListItem,
        AsyncPipe,
        RouterLink,
        MatListItemTitle,
    ],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
    protected searchQueryString = ''
    protected books$: Observable<Book[]> = of([])

    public constructor(private booksService: BooksService) {}

    public ngOnInit() {
        this.books$ = this.booksService.getBooks()
    }
}
