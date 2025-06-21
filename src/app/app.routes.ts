import { Routes } from '@angular/router'
import { BooksComponent } from '@app/features/books/books.component'

export const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
    },
    {
        path: 'book/new',
        loadComponent: () => import('./features/book/pages/book-form/add-new.component').then((c) => c.AddNewComponent),
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./features/book//pages/book-details/book.component').then((c) => c.BookComponent),
    },
]
