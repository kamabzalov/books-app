import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { LoadingService } from '@app/core/services/loading.service'
import { finalize } from 'rxjs'

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(LoadingService)
    loadingService.isLoading.set(true)
    return next(req).pipe(finalize(() => loadingService.isLoading.set(false)))
}
