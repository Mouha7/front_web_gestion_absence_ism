import { Component, inject } from '@angular/core';
import { Classe } from '../../core/models/Classe.model';
import { ClasseService } from '../../core/services/impl/classe.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classe',
  imports: [SidebarComponent, CommonModule],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css',
})
export class ClasseComponent {
  private readonly classeService: ClasseService = inject(ClasseService);

  classes: Classe[] = [];
  isLoading = true;
  error = '';

  get skeletonItems() {
    return Array(6).fill(0); // Affiche 6 lignes de skeleton par défaut
  }

  ngOnInit(): void {
    this.loadClasse();
  }

  loadClasse(): void {
    this.isLoading = true;
    this.error = '';

    this.classeService.getAbsence().subscribe({
      next: (data: Classe[]) => {
        this.classes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Erreur lors du chargement des classes';
        this.isLoading = false;
      },
    });
  }

  retryLoad(): void {
    this.loadClasse();
  }

  // Fonction pour tracker les éléments dans ngFor (optimisation des performances)
  trackByIndex(index: number): number {
    return index;
  }

  trackByClasse(index: number, classe: Classe): any {
    return classe.id || classe.nom || index;
  }

  // Calcule l'effectif total
  getTotalEffectif(): number {
    return this.classes.reduce(
      (total, classe) => total + (classe.effectif || 0),
      0
    );
  }

  // Retourne l'heure actuelle formatée
  getCurrentTime(): string {
    return new Date().toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
