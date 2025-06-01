import { Component } from '@angular/core';
import { AuthService } from '../../core/services/impl/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/absences']);
    } else {
      this.error = 'Identifiants invalides';
    }
  }
}
