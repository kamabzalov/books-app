import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatToolbar } from '@angular/material/toolbar'

@Component({
    selector: 'books-header',
    imports: [MatToolbar],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
