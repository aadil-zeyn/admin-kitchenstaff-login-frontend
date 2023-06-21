// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//     username: string | undefined;
//     password: string | undefined;
//     isLoggedIn: boolean | any;
  
//     constructor(private router: Router) { }
  
//     login() {
//       // Perform login logic, validate credentials, etc.
  
//       // Once the user is successfully logged in, set the isLoggedIn property to true
//       this.isLoggedIn = true;
      
//       // Navigate to the admin home page
//       this.router.navigate(['/adminhome']);
//     }
//   }


import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username!: string;
  password!: string;

  constructor(private adminService: AdminService) {}

  login(): void {
    this.adminService.login(this.username, this.password);
  }
}
