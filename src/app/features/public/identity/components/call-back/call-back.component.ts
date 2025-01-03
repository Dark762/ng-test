import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-call-back',
  standalone: false,
  templateUrl: './call-back.component.html',
  styleUrl: './call-back.component.scss'
})
export class CallBackComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.handleCallback(code);
      }
    });
  }

  handleCallback(code: string) {
    this.http.post(environment.apiUrl + '/auth/callback', { code })
      .subscribe(token => {
        console.log('Token received:', token);
        localStorage.setItem('access_token', token.toString());
      });
  }
}
