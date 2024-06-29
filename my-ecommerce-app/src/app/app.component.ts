import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReservaComponent } from './reserva/reserva.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


// import { AppComponent } from './app.component';
import { ApiService } from './api.service';

// en app.html comoponent se pone el footer y el nav
@Component({
  selector: 'app-root',
  standalone: true,
  // navbar component y footer component al poner en app component html  
  // <app-nav-bar> de apertura y cierre
  // router-outlet
  // <app-footer>

  // abajo en import poner los componentes de donde se estan inportando NavBarComponent, FooterComponent y luego en arriba import {NavBarComponent} from 'animations./shared/comopoents/nav-bar/nav-bar.component';

  imports: [RouterOutlet, HomeComponent,HttpClientModule, RouterLink, NavBarComponent, FooterComponent, CommonModule, MenuComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'my-ecommerce-app';
// }
export class AppComponent implements OnInit {
  title = 'frontend';
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getExample().subscribe(data => {
      this.message = data.message;
    });
  }
}