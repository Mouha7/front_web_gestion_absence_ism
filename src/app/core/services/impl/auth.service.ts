import { Injectable } from '@angular/core';
import { Role } from '../../models/utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: Role | null = null;

  login(email: string, password: string): boolean {
    // Authentification simple : admin@exemple.com / admin123
    if (email === 'admin@exemple.com' && password === 'admin123') {
      this.isLoggedIn = true;
      this.userRole = Role.ADMIN;
      return true;
    }
    this.isLoggedIn = false;
    this.userRole = null;
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  isAdmin(): boolean {
    return this.userRole === Role.ADMIN;
  }
}
