import { Component, inject, OnInit } from '@angular/core';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { Absence } from '../../core/models/absence.model';
import { CommonModule } from '@angular/common';
import { Justification } from '../../core/models/justification.model';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css',
})
export class AbsencesComponent implements OnInit {
  private readonly absenceService: AbsenceService = inject(AbsenceService);
  private readonly router: Router = inject(Router);

  absences: Absence[] = [];

  isLoading = true;
  selectedJustification: Justification | null = null;

  ngOnInit(): void {
    this.loadAbsences();
    console.log(this.absences);
  }

  loadAbsences(): void {
    this.isLoading = true;
    this.absenceService.getAbsence().subscribe({
      next: (data: Absence[]) => {
        this.absences = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
      },
    });
  }

  getSkeletonItems(): number[] {
    return Array(5).fill(0); // Génère 5 lignes de skeleton
  }

  viewDetail(absenceId: string) {
    this.router.navigate(['/absences', absenceId]);
  }
}
