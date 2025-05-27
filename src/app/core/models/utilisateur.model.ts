import { Absence } from './absence.model';
import { AbstractModel } from './abstract.model';

export enum Role {
  ADMIN = 'ADMIN',
  ETUDIANT = 'ETUDIANT',
  VIGILE = 'VIGILE',
}

export interface Admin extends AbstractModel {
  departement: string;
  nom: string;
  prenom: string;
  email: string;
  role: Role.ADMIN;
}

export interface Etudiant extends AbstractModel {
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  filiere: string;
  niveau: string;
  role: Role.ETUDIANT;
  absences?: Absence[];
}

export interface Vigile extends AbstractModel {
  badge: string;
  nom: string;
  prenom: string;
  email: string;
  role: Role.VIGILE;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: Role;
}
