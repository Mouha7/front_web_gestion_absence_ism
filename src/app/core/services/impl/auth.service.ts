import { Injectable } from '@angular/core';
import {
  LoginRequestDTO,
  LoginResponse,
  Role,
} from '../../models/utilisateur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser?: LoginResponse;

  constructor(private http: HttpClient) {}

  login(data: LoginRequestDTO): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'https://ism-absences-api.onrender.com/api/web/auth/login',
      data,
      { withCredentials: true }
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      'https://ism-absences-api.onrender.com/api/web/auth/logout',
      {},
      { withCredentials: true }
    );
  }

  setCurrentUser(user: LoginResponse) {
    this.currentUser = user;
  }

  getCurrentUser(): LoginResponse | undefined {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getRole(): string | undefined {
    return this.currentUser?.role;
  }
}
