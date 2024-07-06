import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
// import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, RegisterComponent, HttpClientModule], // Usa FormsModule en lugar de NgModel
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
// export class RegisterComponent {
//   username: string ='';
//   password: string='';

//   constructor(private authService: AuthService) {}

//   onSubmit(): void {
//     this.authService.register({ username: this.username, password: this.password }).subscribe(response => {
//       console.log(response);
//     });
//   }

export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }
}