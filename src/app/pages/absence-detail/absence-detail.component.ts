import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AbsenceDetail } from '../../core/models/absence.model';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-absence-detail',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './absence-detail.component.html',
  styleUrl: './absence-detail.component.css',
})
export class AbsenceDetailComponent implements OnInit {
  private readonly absenceService: AbsenceService = inject(AbsenceService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  absenceDetail: AbsenceDetail | null = null;
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadAbsenceDetail();
  }

  private loadAbsenceDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.error = "ID d'absence non fourni";
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.absenceService.getAbsenceDetail(id).subscribe({
      next: (data: AbsenceDetail) => {
        this.absenceDetail = data;
        this.isLoading = false;
        console.log('Absence detail loaded:', data);
      },
      error: (err) => {
        console.error('Error loading absence detail:', err);
        this.error = "Erreur lors du chargement des détails de l'absence";
        this.isLoading = false;
      },
    });
  }

  validateJustification(): void {
    if (this.absenceDetail?.justification?.id) {
      // Logique pour valider la justification
      console.log(
        'Validating justification:',
        this.absenceDetail.justification.id
      );
      // Vous pouvez ajouter un service pour gérer la validation
    }
  }

  rejectJustification(): void {
    if (this.absenceDetail?.justification?.id) {
      // Logique pour rejeter la justification
      console.log(
        'Rejecting justification:',
        this.absenceDetail.justification.id
      );
      // Vous pouvez ajouter un service pour gérer le rejet
    }
  }

  contactStudent(): void {
    if (this.absenceDetail?.absence) {
      // Logique pour contacter l'étudiant
      console.log(
        'Contacting student:',
        this.absenceDetail.absence.etudiantMatricule
      );
      // Vous pouvez implémenter l'envoi d'email ou redirection vers un système de messagerie
    }
  }

  viewHistory(): void {
    if (this.absenceDetail?.absence) {
      // Logique pour voir l'historique de l'étudiant
      console.log(
        'Viewing history for student:',
        this.absenceDetail.absence.etudiantMatricule
      );
      // Vous pouvez naviguer vers une page d'historique des absences
    }
  }

  downloadDocument(): void {
    if (this.absenceDetail?.justification?.documentPath) {
      // Logique pour télécharger le document justificatif
      console.log(
        'Downloading document:',
        this.absenceDetail.justification.documentPath
      );
      // Vous pouvez implémenter le téléchargement du document
      window.open(this.absenceDetail.justification.documentPath, '_blank');
    }
  }

  printDetail(): void {
    window.print();
  }

  exportDetail(): void {
    // Logique pour exporter les détails (PDF, Excel, etc.)
    console.log('Exporting absence detail');
  }

  goBack(): void {
    this.router.navigate(['/absences']);
  }
}
