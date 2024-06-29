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

export const appConfig: ApplicationConfig = {
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  providers: [
    provideRouter([
      {path: 'home', component:  HomeComponent},
      {path: 'adminDashboard', component: AdminDashboardComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'contactUs', component: ContactUsComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'orderConfirmation', component: OrderConfirmationComponent},
      {path: 'orderHistory', component: OrderHistoryComponent},
      {path: 'reserva', component: ReservaComponent},
      {path: 'userProfile', component: UserProfileComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],

};
