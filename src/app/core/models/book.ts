import { FormControl } from '@angular/forms'

export interface Book {
    id: number
    name: string
    author: string
    description: string
    year: number
    genre: string
    rating: number
    language: string
}

export interface BookForm {
    name: FormControl<string>
    author: FormControl<string>
    description: FormControl<string>
    year: FormControl<number>
    genre: FormControl<string>
    rating: FormControl<number>
    language: FormControl<string>
}
