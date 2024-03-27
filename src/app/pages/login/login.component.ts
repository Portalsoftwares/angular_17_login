import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;
  loading: boolean=false;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    this.loading = true;
    this.http.post('https://freeapi.gerasim.in/api/User/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Login Success");
        localStorage.setItem('angular17token', res.data.token);
        this.loading = false;
        this.router.navigateByUrl('/dashboard');

      } else {
        alert(res.message)
      }
    })
  }
}

export class Login {
    EmailId: string;
    Password: string;
    constructor() {
      this.EmailId = '';
      this.Password = '';
    }
}
