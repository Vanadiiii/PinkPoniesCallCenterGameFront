import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

interface Token {
  accessToken: string,
  refreshToken: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private options = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private http: HttpClient, private router: Router) { }

  public login(login: string, password: string) {
    this.http.post(`http://192.168.1.15:8080/api/login?login=${login}&password=${password}`, ``, this.options).subscribe((res : Token | any) => {
      localStorage.setItem('accessToken', res.accessToken)
      localStorage.setItem('refreshToken', res.refreshToken)
      this.router.navigate(['/main']);
    })
  }
}
