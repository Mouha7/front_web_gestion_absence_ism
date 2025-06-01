import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClasseStore } from '../../core/services/impl/classe.store';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-absences',
  imports: [CommonModule, RouterModule, FormsModule, HighlightDirective],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css'
})
export class AbsencesComponent {
  selectedClasse = '';
  selectedNiveau = '';
  niveaux = ['L1', 'L2', 'L3'];

  constructor(public classeStore: ClasseStore) {
    if (this.classeStore.classes.length === 0) {
      this.classeStore.addClasse({ nom: 'GLRS', effectif: 30, niveau: 'L3' });
      this.classeStore.addClasse({ nom: 'IAGE', effectif: 28, niveau: 'L2' });
      this.classeStore.addClasse({ nom: 'CDSD', effectif: 25, niveau: 'L1' });
      this.classeStore.addClasse({ nom: 'TTL', effectif: 22, niveau: 'L2' });
      this.classeStore.addClasse({ nom: 'ETSE', effectif: 20, niveau: 'L3' });
      this.classeStore.addClasse({ nom: 'MOSIEF', effectif: 18, niveau: 'L1' });
      this.classeStore.addClasse({ nom: 'MAIE', effectif: 15, niveau: 'L2' });
    }
  }

  get filteredClasses() {
    let classes = this.classeStore.classes;
    if (this.selectedClasse) {
      classes = classes.filter((c: { nom: string }) => c.nom === this.selectedClasse);
    }
    if (this.selectedNiveau) {
      classes = classes.filter((c: { niveau: string }) => c.niveau === this.selectedNiveau);
    }
    return classes;
  }
}
