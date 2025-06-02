import { Component, inject, OnInit } from '@angular/core';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { Absence } from '../../core/models/absence.model';
import { CommonModule } from '@angular/common';
import { Justification } from '../../core/models/justification.model';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css',
})
export class AbsencesComponent implements OnInit {
  private readonly absenceService: AbsenceService = inject(AbsenceService);

  absences: Absence[] = [];

  isLoading = true;
  selectedJustification: Justification | null = null;

  ngOnInit(): void {
    this.loadAbsences();
    console.log(this.loadAbsences);
  }

  loadAbsences(): void {
    this.isLoading = true; // Début du chargement
    this.absenceService.getAbsence().subscribe({
      next: (data: Absence[]) => {
        this.absences = data;
        this.isLoading = false; // Fin du chargement
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false; // Fin du chargement même en cas d'erreur
      },
    });
  }

  getSkeletonItems(): number[] {
    return Array(5).fill(0); // Génère 5 lignes de skeleton
  }
}
