import { AbstractModel } from './abstract.model';
import { Cours } from './cours.model';
import { Justification } from './justification.model';
import { Etudiant, Vigile } from './utilisateur.model';

export interface Absence extends AbstractModel {
  type: TypeAbsence;
  statut: StatutAbsence;
  heurePointage?: Date;
  minutesRetard?: number;
  etudiant: Etudiant | string;
  cours: Cours | string;
  justification?: Justification | string;
  vigile?: Vigile | string;
}

export enum StatutAbsence {
  NON_JUSTIFIEE = 'NON_JUSTIFIEE',
  JUSTIFICATION_EN_ATTENTE = 'EN_ATTENTE',
  JUSTIFICATION_VALIDEE = 'VALIDEE',
  JUSTIFICATION_REJETEE = 'REJETEE',
}

export enum TypeAbsence {
  ABSENCE = 'ABSENCE',
  RETARD = 'RETARD',
}
