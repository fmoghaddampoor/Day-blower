import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // Inject the Router service.
    constructor(private router: Router) {
      this.router.navigate(["/login"]);
    }
}
