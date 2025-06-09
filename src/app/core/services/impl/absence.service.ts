import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AbsenceDetail, PaginatedAbsences } from '../../models/absence.model';
import { IAbsenceService } from '../IAbsenceService';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService implements IAbsenceService {
  private readonly apiUrl = 'http://localhost:8080/api/web/absences';
  constructor(private readonly http: HttpClient) {}

  // récupérer tous les absences
  getAbsence(page: number = 0): Observable<PaginatedAbsences> {
    return this.http.get<PaginatedAbsences>(
      `${this.apiUrl}/annee-active?page=${page}`
    );
  }

  // Récupérer une absence par ID
  getAbsenceDetail(id: string): Observable<AbsenceDetail> {
    return this.http.get<AbsenceDetail>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching absence detail:', error);
        return throwError(() => error);
      })
    );
  }
}
