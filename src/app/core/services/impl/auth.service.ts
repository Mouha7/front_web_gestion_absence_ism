import { Injectable } from '@angular/core';
import {
  LoginRequestDTO,
  LoginResponse,
  Role,
} from '../../models/utilisateur.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser?: LoginResponse;

  constructor(private readonly http: HttpClient) {}

  login(data: LoginRequestDTO): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        'https://ism-absences-api.onrender.com/api/web/auth/login',
        data
      )
      .pipe(
        tap((response) => {
          this.storeAuthData(response);
          this.currentUser = response;
        })
      );
  }

  private storeAuthData(authData: LoginResponse) {
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', JSON.stringify(authData.utilisateur));
    localStorage.setItem('realId', authData.realId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  logout(): Observable<any> {
    this.clearAuthData();
    this.currentUser = undefined;
    return this.http.post(
      'https://ism-absences-api.onrender.com/api/web/auth/logout',
      {}
    );
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const realId = localStorage.getItem('realId');

    if (token && user) {
      this.currentUser = {
        token: token,
        type: 'Bearer',
        utilisateur: JSON.parse(user),
        userId: JSON.parse(user).id,
        role: JSON.parse(user).role as Role,
        redirectEndpoint: '',
        realId: realId!,
      };
      return true;
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
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

  // ------------------- pour cookies -----------
  // private readonly currentUser = new BehaviorSubject<LoginResponse | null>(
  //   CookieService.getUserFromCookie()
  // );
  // currentUser$ = this.currentUser.asObservable();

  // constructor(
  //   private readonly http: HttpClient,
  //   private readonly router: Router
  // ) {}

  // login(data: LoginRequestDTO): Observable<boolean> {
  //   return this.http
  //     .post<LoginResponse>('https://ism-absences-api.onrender.com/api/auth/login', data, {
  //       withCredentials: true,
  //     })
  //     .pipe(
  //       tap((res) => {
  //         this.currentUser.next(res);
  //         CookieService.setCookie('currentUser', res.utilisateur);
  //         CookieService.setCookie('roleUser', res.role);
  //       }),
  //       map(() => true),
  //       catchError(() => of(false))
  //     );
  // }

  // logout(): void {
  //   this.http
  //     .post('https://ism-absences-api.onrender.com/api/auth/logout', {
  //       withCredentials: true,
  //     })
  //     .subscribe(() => {
  //       this.currentUser.next(null);
  //       CookieService.deleteCookie('currentUser');
  //       CookieService.deleteCookie('roleUser');
  //       this.router.navigate(['/login']);
  //     });
  // }

  // autoLogin(): Observable<boolean> {
  //   return this.http
  //     .get<LoginResponse>('https://ism-absences-api.onrender.com/api/auth/me', {
  //       withCredentials: true,
  //     })
  //     .pipe(
  //       tap((response) => {
  //         this.currentUser.next(response);
  //         CookieService.setCookie('currentUser', response.utilisateur);
  //         CookieService.setCookie('roleUser', response.role);
  //       }),
  //       map(() => true),
  //       catchError((error) => {
  //         console.error('Auto-login failed:', error);
  //         this.currentUser.next(null);
  //         return of(false);
  //       })
  //     );
  // }

  // getCurrentUser(): LoginResponse | null {
  //   return this.currentUser.value;
  // }

  // hasRole(role: Role): boolean {
  //   return this.currentUser.value?.role === role;
  // }

  // isAdmin(): boolean {
  //   return this.hasRole(Role.ADMIN);
  // }

  // isLoggedIn(): boolean {
  //   return !!this.currentUser;
  // }
}
