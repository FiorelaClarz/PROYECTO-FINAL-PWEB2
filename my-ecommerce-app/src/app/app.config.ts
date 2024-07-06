import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ReservaComponent } from './reserva/reserva.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableListComponent } from './table-list/table-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {path: 'home', component:  HomeComponent},
      {path: 'admin-dashboard', component: AdminDashboardComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'order-confirmation', component: OrderConfirmationComponent},
      {path: 'order-history', component: OrderHistoryComponent},
      {path: 'reserva', component: ReservaComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reserve', component: ReservationFormComponent},
      {path: 'tables', component: TableListComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],

};

