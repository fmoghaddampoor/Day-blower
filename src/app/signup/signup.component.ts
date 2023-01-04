import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

   // Fields to store the user's name, family and email and password.
   nameValue = '';
   surnameValue = '';
   emailValue = '';
   passwordValue = '';
 
   // Field to store the language
   languageValue = 'en';
 
   // Inject the Router service.
   constructor(private router: Router, private translate: TranslateService) {
       translate.setDefaultLang('en');
       translate.use('en');
   }
 
   // On changing language
   onLanguageChange(language: string) {
     console.log("Language is: " + language);
     this.translate.use(language);
   }

  // Method to submit sign up request
  Submit() 
  {
    // TODO document why this method 'Submit' is empty
  }
   
}
