import { Observable } from 'rxjs';
import { Absence, AbsenceDetail } from '../models/absence.model';

export interface IAbsenceService {
  getAbsence(): Observable<Absence[]>;
  getJustificationById(id: string): Observable<AbsenceDetail>;
}
