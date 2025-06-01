import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ClasseStore } from '../core/services/impl/classe.store';

export const dataResolver: ResolveFn<boolean> = (route, state) => {
  // Exemple : précharger les classes avant d'afficher la page
  const classeStore = inject(ClasseStore);
  // Ici, on simule un chargement synchrone (remplace par un appel API si besoin)
  return true;
};
