import { Component, inject, signal, Signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';
import { IUserData } from '../../interfaces/i-user-data';
import { UserData } from '../../classes/user-data';

@Component({
  selector: 'app-registrazione',
  imports: [],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  authService: AuthService = inject(AuthService);

  newUser: Signal<User | null> = this.authService.newUser;

  async registra() {
    if(this.newUser()) {
      const userData = new UserData( {
        ...this.newUser(),
        nome: 'Andrea',
        cognome: 'Trentini',
        note: 'Nuovo utente registrato'
      });
      await this.authService.saveUserData(userData);      
    }
  }

  async logout() {
    await this.authService.logout();
  }

}
