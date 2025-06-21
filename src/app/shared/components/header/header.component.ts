import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatToolbar } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router'
import { MatAnchor } from '@angular/material/button'

@Component({
    selector: 'books-header',
    imports: [MatToolbar, RouterLink, MatAnchor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
