import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-absences',
  imports: [CommonModule, FormsModule],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css'
})
export class AbsencesComponent {
  classes = [
    'GLRS',
    'IAGE',
    'CDSD',
    'TTL',
    'ETSE',
    'MOSIEF',
    'MAIE'
  ];
  selectedClasse = '';

  absences = [
    { matricule: 'FIG-123', nom: 'Ablaye ndiaye', classe: 'GLRS', date: 'Dec 5', statut: 'retard' },
    { matricule: 'FIG-122', nom: 'Babacar diop', classe: 'IAGE', date: 'Dec 5', statut: 'Absent' },
    { matricule: 'FIG-121', nom: 'Sokhna Fall', classe: 'CDSD', date: 'Dec 5', statut: 'Absent' },
    { matricule: 'FIG-120', nom: 'Mbaye lo', classe: 'TTL', date: 'Dec 5', statut: 'Absent' },
    { matricule: 'FIG-119', nom: 'Penda Guissé', classe: 'ETSE', date: 'Dec 5', statut: 'Absent' },
    { matricule: 'FIG-123', nom: 'Aissatou Diakhoumpa', classe: 'MOSIEF', date: 'Dec 5', statut: 'retard' },
    { matricule: 'FIG-123', nom: 'Fanta Dieng', classe: 'MAIE', date: 'Dec 5', statut: 'retard' },
    { matricule: 'FIG-118', nom: 'Mouhameng ndiaye', classe: 'GLRS', date: 'Dec 5', statut: 'Absent' },
    { matricule: 'FIG-118', nom: 'Ousmane ndiaye', classe: 'CDSD', date: 'Dec 5', statut: 'Absent' }
  ];

  get filteredAbsences() {
    if (!this.selectedClasse) return this.absences;
    return this.absences.filter(a => a.classe === this.selectedClasse);
  }
}
