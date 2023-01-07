import { NgModule } from "@angular/core"; // import the NgModule decorator from the Angular core module
import { RouterModule, Routes } from "@angular/router"; // import the RouterModule and Routes types from the Angular router module
import { LoginComponent } from "./login/login.component"; // import the LoginComponent
import { SignupComponent } from "./signup/signup.component"; // import the SignupComponent

const routes: Routes = [
  // define the routes for the application
  { path: "signup", component: SignupComponent }, // route for the signup page
  { path: "login", component: LoginComponent }, // route for the login page
];

@NgModule({
  // define the module
  imports: [RouterModule.forRoot(routes)], // import the RouterModule and configure the routes for the root of the application
  exports: [RouterModule], // make the RouterModule available for use in the templates of the module that imports this module
})
export class AppRoutingModule {} // export the module so it can be imported by other modules in the application
