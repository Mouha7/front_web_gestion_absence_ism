import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { AbsenceDetailComponent } from './pages/absences/absence-detail/absence-detail.component';
import { EtudiantsComponent } from './pages/etudiants/etudiants.component';
import { VigilesComponent } from './pages/vigiles/vigiles.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'absences', component: AbsencesComponent },
      { path: 'absences/:id', component: AbsenceDetailComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'etudiants', component: EtudiantsComponent },
      { path: 'vigiles', component: VigilesComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
