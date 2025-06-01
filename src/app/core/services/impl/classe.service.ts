import { Observable } from 'rxjs';
import { Classe } from '../../models/Classe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private readonly apiUrl =
    'https://ism-absences-api.onrender.com/api/web/admin';
  constructor(private readonly http: HttpClient) {}

  // récupérer tous les absences
  getAbsence(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.apiUrl + '/classes');
  }
}
