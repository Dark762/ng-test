import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-call-back',
  standalone: false,
  templateUrl: './call-back.component.html',
  styleUrl: './call-back.component.scss'
})
export class CallBackComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        localStorage.setItem('access_token', code);
        this.router.navigate(['/private/main/home']);
      }
    });
  }

}
