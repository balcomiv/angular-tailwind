import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  template: `
    <h1 class="mt-10 mb-10 text-center text-3xl font-bold underline">
      Angular v19.1 + Tailwind CSS 4.0
    </h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
