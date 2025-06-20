import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './shared/components/header/header.component'
import { LoaderComponent } from '@app/shared/components/loader/loader.component'
import { LoadingService } from '@app/core/services/loading.service'

@Component({
    selector: 'books-root',
    imports: [RouterOutlet, HeaderComponent, LoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private loadingService = inject(LoadingService)
    protected isLoading = this.loadingService.isLoading
}
