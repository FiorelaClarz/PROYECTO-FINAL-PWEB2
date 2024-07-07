import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
// import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    HomeComponent,
    FormsModule,
    CommonModule,
    RegisterComponent,
    HttpClientModule,
  ], // Usa FormsModule en lugar de NgModel
  providers: [AuthService, ApiService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrige el typo aquí (styleUrl -> styleUrls)
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  refreshToken: string | null = null;
  accessToken: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(response => {
      console.log(response);
      this.isLoggedIn = true;
      this.refreshToken = response.refresh;
      this.accessToken = response.access;
    });
  }

  logout(): void {
    if (this.refreshToken && this.accessToken) {
      this.authService.logout(this.refreshToken, this.accessToken).subscribe(response => {
        console.log('Logged out successfully');
        this.isLoggedIn = false;
        this.refreshToken = null;
        this.accessToken = null;
      }, error => {
        console.error('Logout error', error);
      });
  }
  }
}
