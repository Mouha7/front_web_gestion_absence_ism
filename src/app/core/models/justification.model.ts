export interface Justification {
  id: string;
  description: string;
  documentPath: string;
  statut: StatutJustification;
  dateValidation?: Date;
  coursNom: string;
  jourCours: string;
  absenceId: string;
}

export enum StatutJustification {
  EN_ATTENTE = 'EN_ATTENTE',
  VALIDEE = 'VALIDEE',
  REJETEE = 'REJETEE',
}
