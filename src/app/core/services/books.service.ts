import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { Book } from '@app/core/models/book'

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    private readonly api = '/assets/books.json'

    private readonly cache = new BehaviorSubject<Book[]>([])
    private readonly http = inject(HttpClient)

    public getBooks(searchQuery?: string): Observable<Book[]> {
        if (!searchQuery) {
            return this.http.get<Book[]>(`${this.api}`)
        }
        return this.http
            .get<Book[]>(`${this.api}`)
            .pipe(
                map((response) =>
                    response.filter(
                        (book) =>
                            book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                )
            )
    }
}
