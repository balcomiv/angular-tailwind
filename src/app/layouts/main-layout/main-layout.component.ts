import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styleUrl: './main-layout.component.scss',
  template: `
    <nav id="sidebar">
      <ul>
        <li>
          <span class="logo">CodeFun</span>
          <button id="toggle-btn">
            <img src="assets/icons/keyboard-double-arrow-left.svg" alt="double-left-arrow" />
          </button>
        </li>
        <li>
          <a routerLink="/home" routerLinkActive="active" class="flex">
            <img src="assets/icons/home.svg" alt="home" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a routerLink="/dashboard" routerLinkActive="active" class="flex">
            <img src="assets/icons/dashboard.svg" alt="dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <button class="dropdown-btn flex">
            <img src="assets/icons/create-new.svg" alt="create-new" />
            <span>Create</span>
            <img src="assets/icons/keyboard-arrow-down.svg" alt="down-arrow" />
          </button>
          <ul class="sub-menu">
            <li><a src="#">Folder</a></li>
            <li><a src="#">Document</a></li>
            <li><a src="#">Project</a></li>
          </ul>
        </li>
        <li>
          <button class="dropdown-btn flex">
            <img src="assets/icons/create-new.svg" alt="create-new" />
            <span>Todo-Lists</span>
            <img src="assets/icons/keyboard-arrow-down.svg" alt="down-arrow" />
          </button>
          <ul class="sub-menu">
            <li><a src="#">Work</a></li>
            <li><a src="#">Private</a></li>
            <li><a src="#">Coding</a></li>
            <li><a src="#">Gardening</a></li>
            <li><a src="#">School</a></li>
          </ul>
        </li>
        <li>
          <a routerLink="/calendar" routerLinkActive="active" class="flex">
            <img src="assets/icons/calendar.svg" alt="calendar" />
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a routerLink="/profile" routerLinkActive="active" class="flex">
            <img src="assets/icons/person.svg" alt="profile" />
            <span>Profile</span>
          </a>
        </li>
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
