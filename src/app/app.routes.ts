import { Routes } from '@angular/router'
import { BooksComponent } from './features/books/components/books.component'

export const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./features/book/components/book.component').then((c) => c.BookComponent),
    },
]
