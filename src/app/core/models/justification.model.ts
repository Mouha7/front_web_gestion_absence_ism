import { Absence } from './absence.model';
import { AbstractModel } from './abstract.model';
import { Admin } from './utilisateur.model';

export interface Justification extends AbstractModel {
  motif: string;
  documentPath: string;
  statut: StatutJustification;
  dateValidation?: Date;
  absence: Absence | string;
  admin?: Admin | string;
}

export enum StatutJustification {
  EN_ATTENTE = 'EN ATTENTE',
  VALIDEE = 'VALIDEE',
  REJETEE = 'REJETE',
}
