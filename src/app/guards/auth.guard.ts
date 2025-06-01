import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Exemple : n'autorise l'accès qu'aux utilisateurs connectés (ici toujours true pour la démo)
  // Remplace par une vraie logique d'authentification si besoin
  return true;
};
