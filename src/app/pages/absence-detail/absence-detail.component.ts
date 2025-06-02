import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AbsenceDetail, TypeAbsence } from '../../core/models/absence.model';
import { AbsenceService } from '../../core/services/impl/absence.service';
import { StatutJustification } from '../../core/models/justification.model';

@Component({
  selector: 'app-absence-detail',
  imports: [CommonModule, SidebarComponent],
  templateUrl: './absence-detail.component.html',
  styleUrl: './absence-detail.component.css',
})
export class AbsenceDetailComponent {
  @Input() absenceId: string = '';
  @Input() isVisible: boolean = false;

  absenceDetail: AbsenceDetail | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private readonly absenceService: AbsenceService) {}

  ngOnInit() {
    if (this.absenceId && this.isVisible) {
      this.loadAbsenceDetail();
    }
  }

  ngOnChanges() {
    if (this.absenceId && this.isVisible && !this.absenceDetail) {
      this.loadAbsenceDetail();
    }
  }

  loadAbsenceDetail() {
    this.isLoading = true;
    this.error = null;

    this.absenceService.getJustificationById(this.absenceId).subscribe({
      next: (data) => {
        // Simuler la structure AbsenceDetail car l'API retourne seulement Justification
        // Vous devrez adapter selon votre API réelle
        this.absenceDetail = data as any;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Impossible de charger les détails de l'absence";
        this.isLoading = false;
        console.error('Erreur lors du chargement:', err);
      },
    });
  }

  closeModal() {
    this.isVisible = false;
    this.absenceDetail = null;
    this.error = null;
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  getInitials(prenom: string, nom: string): string {
    return `${prenom?.charAt(0) || ''}${nom?.charAt(0) || ''}`.toUpperCase();
  }

  getTypeClass(type: TypeAbsence): string {
    switch (type) {
      case TypeAbsence.RETARD:
        return 'bg-yellow-100 text-yellow-800';
      case TypeAbsence.ABSENCE_COMPLETE:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getTypeLabel(type: TypeAbsence): string {
    switch (type) {
      case TypeAbsence.RETARD:
        return 'Retard';
      case TypeAbsence.ABSENCE_COMPLETE:
        return 'Absence complète';
      default:
        return 'Non défini';
    }
  }

  getJustificationStatusClass(statut: StatutJustification): string {
    switch (statut) {
      case StatutJustification.VALIDEE:
        return 'bg-green-100 text-green-800';
      case StatutJustification.EN_ATTENTE:
        return 'bg-yellow-100 text-yellow-800';
      case StatutJustification.REJETEE:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getJustificationStatusLabel(statut: StatutJustification): string {
    switch (statut) {
      case StatutJustification.VALIDEE:
        return 'Validée';
      case StatutJustification.EN_ATTENTE:
        return 'En attente';
      case StatutJustification.REJETEE:
        return 'Rejetée';
      default:
        return 'Non défini';
    }
  }

  formatDate(date: Date | string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  formatTime(date: Date | string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
