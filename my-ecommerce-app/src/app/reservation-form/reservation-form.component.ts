import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ReservationService } from '../reservation.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ApiService } from '../api.service';
import { TableListComponent } from '../table-list/table-list.component';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule, TableListComponent],
  templateUrl: './reservation-form.component.html',
  providers: [ReservationService],
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  @Input() table: any; // Recibe la mesa seleccionada como input
  @Output() reservationMade = new EventEmitter<void>(); // Emite un evento cuando se hace una reserva

  reservation: any = {}; // Objeto para almacenar los datos de la reserva

  constructor(private  reservationService: ReservationService)  { }

  ngOnInit() {
  //   // Aquí puedes agregar cualquier lógica de inicialización que necesites
    console.log('ReservationFormComponent inicializado');
  }

  makeReservation(): void {
    this.reservation.table = this.table.id; // Asigna el ID de la mesa a la reserva
    this.reservationService.makeReservation(this.reservation).subscribe(() => {
      this.reservationMade.emit(); // Emite el evento de reserva hecha
    });
  }
}
