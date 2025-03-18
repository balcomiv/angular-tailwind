import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav id="sidebar">
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/test" routerLinkActive="active">Test</a></li>
        <li><a routerLink="/two">two</a></li>
      </ul>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
