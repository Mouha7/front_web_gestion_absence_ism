import { Cours } from './cours.model';
import { Justification } from './justification.model';

export interface Absence {
  id: string;
  type: TypeAbsence;
  heurePointage?: Date;
  minutesRetard?: number;
  cours: Cours;
  justification?: Justification;
}

export enum TypeAbsence {
  ABSENCE = 'ABSENCE_COMPLET',
  RETARD = 'RETARD',
}

export interface ApiResponse<T> {
  results: T[];
  status: string;
  type: string;
}
