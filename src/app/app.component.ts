import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'root',
  imports: [RouterOutlet],
  template: `
    <h1 class="mt-10 mb-10 text-center text-3xl font-bold underline">
      Angular v19.1 + Tailwind CSS 4.0
    </h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-tailwind';
}
