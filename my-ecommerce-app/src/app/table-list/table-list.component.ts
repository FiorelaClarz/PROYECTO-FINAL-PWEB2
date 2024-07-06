// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-table-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './table-list.component.html',
//   styleUrl: './table-list.component.css'
// })
// export class TableListComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReservationFormComponent, HttpClientModule],
  providers: [ReservationService],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tables: any = []; // Array para almacenar las mesas obtenidas del backend
  selectedTable: any; // Variable para almacenar la mesa seleccionada

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getTables().subscribe(data => {
      this.tables = data; // Asignar las mesas obtenidas del servicio
    });
  }

  selectTable(table: any): void {
    this.selectedTable = table; // Asignar la mesa seleccionada a la variable
  }
}
