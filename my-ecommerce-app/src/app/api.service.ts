// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; // URL del backend Django

  constructor(private http: HttpClient) { }

  getExample(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/example/`);
  
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/`);
  }
}
