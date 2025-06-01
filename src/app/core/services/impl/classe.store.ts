import { Injectable, signal } from '@angular/core';
// Supprime l'import de toSignal, Signal
import { Observable, of } from 'rxjs';

export interface Classe {
  nom: string;
  effectif: number;
  niveau: string;
  annee?: string; // année active optionnelle
}

@Injectable({ providedIn: 'root' })
export class ClasseStore {
  private _classes = signal<Classe[]>([
    { nom: 'GLRS', effectif: 30, niveau: 'L3', annee: '2024-2025' },
    { nom: 'IAGE', effectif: 28, niveau: 'L2', annee: '2024-2025' },
    { nom: 'CDSD', effectif: 25, niveau: 'L1', annee: '2024-2025' },
    { nom: 'TTL', effectif: 22, niveau: 'L2', annee: '2024-2025' },
    { nom: 'ETSE', effectif: 20, niveau: 'L3', annee: '2024-2025' },
    { nom: 'MOSIEF', effectif: 18, niveau: 'L1', annee: '2024-2025' },
    { nom: 'MAIE', effectif: 15, niveau: 'L2', annee: '2024-2025' }
  ]);

  // Utilise le signal directement
  get classes() {
    return this._classes();
  }

  getClasses$(): Observable<Classe[]> {
    return of(this._classes());
  }

  addClasse(classe: Classe) {
    this._classes.update(list => [...list, classe]);
  }
}
