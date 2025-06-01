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

  ngOnInit(): void {
    this.loadClasse();
  }

  loadClasse(): void {
    this.classeService.getAbsence().subscribe({
      next: (data: Classe[]) => {
        this.classes = data;
      },
      error: (err) => console.error('Error:', err),
    });
  }
}
