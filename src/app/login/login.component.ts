import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

// Decorator that marks a class as an Angular component and provides configuration metadata.
@Component({
  // The component's HTML tag name.
  selector: "app-login",
  // The location of the component's template file.
  templateUrl: "./login.component.html",
  // The location of the component's CSS styles.
  styleUrls: ["./login.component.scss"],
})

// Login component
export class LoginComponent {
  // Fields to store the user's name and password.
  userNameValue = "";
  passwordValue = "";

  // Field to store the language
  languageValue = "en";

  // Inject the Router service.
  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  // On changing language
  onLanguageChange(language: string) {
    console.log("Language is: " + language);
    this.translate.use(language);
  }

  // Method to handle the login process.
  Login() {
    // Check if the user's name and password are both "admin".
    if (this.userNameValue === "admin" && this.passwordValue === "admin") {
      // Navigate to the route for "another-page" if the login is successful.
      this.router.navigate(["/another-page"]);
    } else {
      // Show an alert if the login is unsuccessful.
      window.alert("Invalid username or password!");
    }
  }

  // Method to handle the sign up process.
  SignUp() {
    this.router.navigate(["/signup"]);
  }
}
