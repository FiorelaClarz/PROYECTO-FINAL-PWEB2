import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api'; // URL de tu backend

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register/`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login/`, credentials);
  }

  logout(refreshToken: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout/`, { refresh: refreshToken });
  }
}
