import { Component, inject, OnInit } from '@angular/core';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { Absence } from '../../core/models/absence.model';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    console.log('Starting to fetch absences...');
    this.absenceService.getAbsence().subscribe({
      next: (data: Absence[]) => {
        console.log('Raw data from API:', data);
        this.absences = data;
        console.log('Processed absences:', this.absences);
      },
      error: (err) => {
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
