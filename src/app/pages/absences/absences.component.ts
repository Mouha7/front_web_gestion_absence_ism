import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-absences',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css'
})
export class AbsencesComponent {
  classes = [
    { nom: 'GLRS', effectif: 30 },
    { nom: 'IAGE', effectif: 28 },
    { nom: 'CDSD', effectif: 25 },
    { nom: 'TTL', effectif: 22 },
    { nom: 'ETSE', effectif: 20 },
    { nom: 'MOSIEF', effectif: 18 },
    { nom: 'MAIE', effectif: 15 }
  ];
  selectedClasse = '';

  get filteredClasses() {
    if (!this.selectedClasse) return this.classes;
    return this.classes.filter(c => c.nom === this.selectedClasse);
  }
}
