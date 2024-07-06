import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8000/api/'; // URL base del API en Django

  constructor(private http: HttpClient) { }

  // Método para obtener las mesas desde el backend
  getTables(): Observable<any> {
    return this.http.get(`${this.apiUrl}tables/`);
  }

  // Método para hacer una reserva
  makeReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}reservations/`, reservation);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReservationService {

//   constructor() { }
// }
