import { AbstractControl, ValidatorFn } from '@angular/forms'

export default function xssValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        const value = control.value as string
        const pattern = /<script[\s>]|<\/script>|on\w+=|javascript:/gi
        if (pattern.test(value)) {
            return { maliciousCode: true }
        }
        return null
    }
}
