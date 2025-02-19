import { Component, inject, Signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';
import { UserData } from '../../classes/user-data';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authService: AuthService = inject(AuthService);
  currentUser: Signal<UserData | null> = this.authService.currentUser;

  async login() {
    try {
      await this.authService.login();
    }
    catch (error) {
      console.log('Errore durante il login: ', error)
    }
  }

  async logout() {
    await this.authService.logout();
  }

}
