import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/HomeComponent';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
  // { path: '**' },
];

