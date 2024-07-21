import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/HomeComponent';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent ,  canActivate: [authGuard]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },

];

