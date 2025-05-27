import { Absence } from './absence.model';
import { AbstractModel } from './abstract.model';

export interface Cours extends AbstractModel {
  nom: string;
  enseignant: string;
  salle: string;
  heureDebut: Date;
  heureFin: Date;
  jour: string;
  pointageFerme: boolean;
  absences?: Absence[];
}
