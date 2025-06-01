import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classe-detail.component.html',
  styleUrl: './classe-detail.component.css'
})
export class ClasseDetailComponent {
  nomClasse: string = '';
  cours: any[] = [];

  // Simuler les cours par classe
  allCours: Record<string, any[]> = {
    'GLRS': [
      { nom: 'Programmation Web', enseignant: 'M. Diop', salle: 'A1' },
      { nom: 'Base de Données', enseignant: 'Mme Ndiaye', salle: 'B2' }
    ],
    'IAGE': [
      { nom: 'Mathématiques', enseignant: 'M. Sow', salle: 'C1' },
      { nom: 'Réseaux', enseignant: 'Mme Faye', salle: 'D3' }
    ],
    'CDSD': [
      { nom: 'Anglais', enseignant: 'Mme Sy', salle: 'E1' }
    ],
    'TTL': [
      { nom: 'Gestion', enseignant: 'M. Fall', salle: 'F2' }
    ],
    'ETSE': [
      { nom: 'Electronique', enseignant: 'Mme Ba', salle: 'G1' }
    ],
    'MOSIEF': [
      { nom: 'Comptabilité', enseignant: 'M. Kane', salle: 'H2' }
    ],
    'MAIE': [
      { nom: 'Marketing', enseignant: 'Mme Diouf', salle: 'I3' }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nomClasse = this.route.snapshot.params['nomClasse'];
    this.cours = this.allCours[this.nomClasse] || [];
  }
}
