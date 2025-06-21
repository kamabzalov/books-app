import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map, Observable, of, tap, throwError } from 'rxjs'
import { Book } from '@app/core/models/book'
import { generateId } from '@app/core/utils/generate-id'

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    private readonly api = '/assets/books.json'

    private readonly cache = new BehaviorSubject<Book[]>([])
    private readonly http = inject(HttpClient)

    public getBooks(searchQuery?: string): Observable<Book[]> {
        if (!searchQuery) {
            if (!this.cache.getValue().length) {
                return this.http.get<Book[]>(`${this.api}`).pipe(tap((result) => this.cache.next(result)))
            }
            return this.cache.asObservable()
        }
        const cachedValue = this.cache.getValue()
        if (cachedValue.length) {
            const filteredBooks = cachedValue.filter(
                (book) =>
                    book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchQuery.toLowerCase())
            )
            return of(filteredBooks)
        }
        return this.http
            .get<Book[]>(`${this.api}`)
            .pipe(
                map((response: Book[]) =>
                    response.filter(
                        (book) =>
                            book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                )
            )
    }

    public saveBook(bookData: Omit<Book, 'id'>): Observable<Book> {
        let cacheValue = this.cache.getValue()
        const newBookId = generateId()
        const isIdExist = cacheValue.findIndex((elem) => elem.id === newBookId)
        if (isIdExist > -1) {
            return throwError(() => new Error('ID уже существует'))
        }
        const newBook = { ...bookData, id: newBookId }
        cacheValue = cacheValue.concat(newBook)
        this.cache.next(cacheValue)
        return of(newBook)
    }

    getBookById(bookId: number): Observable<Book | null> {
        const books = this.cache.getValue()
        if (books.length) {
            const book = books.find((elem) => elem.id === bookId)
            return book ? of(book) : of(null)
        } else {
            return this.http.get<Book[]>(`${this.api}`).pipe(
                map((response) => {
                    return response.find((elem) => elem.id === bookId) ?? null
                })
            )
        }
    }
}
