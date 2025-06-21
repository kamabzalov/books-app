import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Book, BookForm } from '@app/core/models/book'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatSelect } from '@angular/material/select'
import { MatOption } from '@angular/material/core'
import { MatButton } from '@angular/material/button'
import isEmptyValueValidator from '@app/shared/validators/is-empty-value.validator'
import { BooksService } from '@app/core/services/books.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import xssValidator from '@app/shared/validators/xss.validator'

@Component({
    selector: 'books-add-new',
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInput, MatSelect, MatOption, MatButton],
    templateUrl: './add-new.component.html',
    styleUrl: './add-new.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewComponent implements OnInit {
    protected bookForm!: FormGroup<BookForm>
    protected readonly languages: string[] = ['Русский', 'Английский']

    private formBuilder = inject(FormBuilder)
    private bookService = inject(BooksService)
    private destroyRef = inject(DestroyRef)
    private router = inject(Router)
    private snackBar = inject(MatSnackBar)

    public ngOnInit(): void {
        this.bookForm = this.formBuilder.group<BookForm>({
            name: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, isEmptyValueValidator()],
            }),
            author: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, isEmptyValueValidator()],
            }),
            description: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, isEmptyValueValidator(), xssValidator(), Validators.maxLength(250)],
            }),
            year: new FormControl<number>(new Date().getFullYear(), {
                nonNullable: true,
                validators: [Validators.required],
            }),
            genre: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, isEmptyValueValidator()],
            }),
            rating: new FormControl<number>(0, {
                nonNullable: true,
                validators: [Validators.required],
            }),
            language: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, isEmptyValueValidator()],
            }),
        })
    }

    protected saveBook() {
        if (this.bookForm.invalid) {
            return
        }
        const bookData: Omit<Book, 'id'> = this.bookForm.getRawValue()
        this.bookService
            .saveBook(bookData)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.snackBar.open('Книга добавлена', 'Закрыть', { duration: 5000 })
                    this.router.navigate(['/']).then()
                },
                error: () => {
                    this.snackBar.open('Произошла ошибка', 'Закрыть', { duration: 5000 })
                },
            })
    }
}
