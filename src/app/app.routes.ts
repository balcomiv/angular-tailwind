import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      //     {
      //       path: 'login',
      //       component: LoginComponent,
      //     }
    ],
  },
  {
    path: 'test',
    component: MainLayoutComponent,
  },
];
