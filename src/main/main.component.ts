import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Decorator that marks a class as an Angular component and provides configuration metadata.
@Component({
  // The component's HTML tag name.
  selector: 'app-main',
  // The location of the component's template file.
  templateUrl: './main.component.html',
  // The location of the component's CSS styles.
  styleUrls: ['./main.component.css'],
})

// Main component
export class MainComponent {
  // Fields to store the user's name and password.
  userNameValue = '';
  passwordValue = '';

  // Field to store the language
  languageValue = 'en';

  // Inject the Router service.
  constructor(private router: Router) {}

  // On changing language
  onLanguageChange(language: string) {
    // Do something with the selected language
  }

  // Method to handle the login process.
  Login() 
  {
    // Check if the user's name and password are both "admin".
    if (this.userNameValue === 'admin' && this.passwordValue === 'admin') {
      // Navigate to the route for "another-page" if the login is successful.
      this.router.navigate(['/another-page']);
    } 
    else 
    {
      // Show an alert if the login is unsuccessful.
      window.alert('Invalid username or password!');
    }
  }
}