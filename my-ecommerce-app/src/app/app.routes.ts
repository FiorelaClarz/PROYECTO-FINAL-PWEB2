import { Routes } from '@angular/router';

// ********?????????

import { TableListComponent } from './table-list/table-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

// ********?????????

export const routes: Routes = [
    // ********?????????
    { path: 'tables', component: TableListComponent },
    { path: 'reserve', component: ReservationFormComponent },
    { path: '', redirectTo: '/tables', pathMatch: 'full' }
    // ********?????????
];
