import { ResolveFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { BooksService } from '@app/core/services/books.service'
import { map, Observable, of } from 'rxjs'
import { Book } from '@app/core/models/book'

export const bookResolver: ResolveFn<Book | null> = (route): Observable<Book | null> => {
    const booksService = inject(BooksService)
    const router = inject(Router)
    const id = route.paramMap.get('id')
    if (!id) {
        router.navigate(['/']).then()
        return of(null)
    }
    return booksService.getBookById(+id).pipe(
        map((book) => {
            if (book) {
                return book
            }
            router.navigate(['/'])
            return null
        })
    )
}
