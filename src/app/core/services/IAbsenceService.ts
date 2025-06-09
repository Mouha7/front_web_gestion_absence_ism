import { Observable } from 'rxjs';
import {
  Absence,
  AbsenceDetail,
  PaginatedAbsences,
} from '../models/absence.model';

export interface IAbsenceService {
  getAbsence(): Observable<PaginatedAbsences>;
  getAbsenceDetail(id: string): Observable<AbsenceDetail>;
}
