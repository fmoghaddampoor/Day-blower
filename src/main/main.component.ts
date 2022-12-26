import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  userNameValue = '';
  passwordValue = '';

  constructor(private router: Router) {}

  // Login
  Login() 
  {
    if (this.userNameValue === 'admin' && this.passwordValue === 'admin') {
      this.router.navigate(['/another-page']);
    } 
    else 
    {
      window.alert('Invalid username or password!');
    }
  }
}
