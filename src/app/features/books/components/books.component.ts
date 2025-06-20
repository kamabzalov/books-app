import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core'
import { SearchFormComponent } from '@app/shared/components/search-form/search-form.component'
import { debounceTime, finalize, Observable, of, switchMap, tap } from 'rxjs'
import { Book } from '@app/core/models/book'
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list'
import { AsyncPipe } from '@angular/common'
import { RouterLink } from '@angular/router'
import { toObservable } from '@angular/core/rxjs-interop'
import { BooksService } from '@app/core/services/books.service'
import { LoadingService } from '@app/core/services/loading.service'

@Component({
    selector: 'books-books',
    imports: [SearchFormComponent, MatList, MatListItem, AsyncPipe, RouterLink, MatListItemTitle],
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
    protected searchQueryString: WritableSignal<string> = signal('')
    protected searchString = toObservable(this.searchQueryString)
    protected books$: Observable<Book[]> = of([])

    private booksService = inject(BooksService)
    private loadingService = inject(LoadingService)
    protected isLoading = this.loadingService.isLoading

    public ngOnInit() {
        this.books$ = this.searchString.pipe(
            tap(() => this.isLoading.set(true)),
            debounceTime(500),
            finalize(() => this.isLoading.set(false)),
            switchMap((query) => this.booksService.getBooks(query))
        )
    }
}
