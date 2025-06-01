import { Component, inject, OnInit } from '@angular/core';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { Absence } from '../../core/models/absence.model';
import { CommonModule } from '@angular/common';
import { Justification } from '../../core/models/justification.model';

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css',
})
export class AbsencesComponent implements OnInit {
  private readonly absenceService: AbsenceService = inject(AbsenceService);

  absences: Absence[] = [];
  showModal = false;
  selectedJustification: Justification | null = null;

  ngOnInit(): void {
    this.loadAbsences();
  }

  loadAbsences(): void {
    this.absenceService.getAbsence().subscribe({
      next: (data: Absence[]) => {
        this.absences = data;
      },
      error: (err) => console.error('Error:', err),
    });
  }
}
