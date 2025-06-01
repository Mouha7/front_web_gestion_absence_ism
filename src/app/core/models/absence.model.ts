import { Cours } from './cours.model';
import { Justification } from './justification.model';
import { Etudiant } from './utilisateur.model';

export interface Absence {
  id: string;
  createdAt: Date;
  type: TypeAbsence;
  heurePointage?: Date;
  minutesRetard?: number;
  cours: Cours;
  justification?: Justification;
  etudiantNom: string;
  etudiantPrenom: string;
  etudiantMatricule: string;
  coursNom: string;
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
