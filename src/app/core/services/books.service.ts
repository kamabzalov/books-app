import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { Book } from '@app/core/models/book'

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    private readonly api = '/assets/books.json'

    private readonly cache = new BehaviorSubject<Book[]>([])

    constructor(private http: HttpClient) {}

    public getBooks(searchQuery?: string): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.api}`)
    }
}
