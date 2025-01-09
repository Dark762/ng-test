import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _authService: AuthService, private _router: Router) {

  }

  fnLogin() {
    window.location.href = `${environment.apiUrl}/auth/login`;
  }

  fnlogout() {
    const token = localStorage.getItem('access_token'); 

    if (!token) {
      localStorage.clear();
      this._router.navigate(['/login']);
      return;
    }

    this._authService.logout(token).subscribe(
      (response) => {
        console.log('Logged out:', response);
        localStorage.removeItem('access_token');
        this._router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }
}
