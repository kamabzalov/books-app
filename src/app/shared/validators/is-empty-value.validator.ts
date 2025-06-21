import { AbstractControl, ValidatorFn } from '@angular/forms'

export default function isEmptyValueValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        return !control.value?.trim() ? { emptyValue: true } : null
    }
}
