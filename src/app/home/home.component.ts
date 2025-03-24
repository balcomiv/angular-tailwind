import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  template: `
    <h1 class="mt-10 mb-10 text-center text-3xl font-bold underline">
      {{ message() }}
    </h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  message = input('Angular v19.1 + Tailwind CSS 4.0');
}
