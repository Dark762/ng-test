import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl +  '/auth'; 

  constructor(private http: HttpClient) {}

  logout(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, { token });
  }
}
