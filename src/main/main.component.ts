import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  userNameValue = '';
  passwordValue = '';

  // Login
  Login() 
  {
    // Make HTTP request to authenticate user
    // Set login status in application
  }
}
