import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../../models/absence.model';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  private readonly apiUrl = 'http://localhost:8080/api/mobile/etudiant/6';
  constructor(private readonly http: HttpClient) {}

  // récupérer tous les absences
  getAbsence(): Observable<Absence[]> {
    return this.http.get<Absence[]>(this.apiUrl + '/absences');
  }
}
