import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { KitchenStaffService } from 'src/app/service/kitchen-staff.service';

@Component({
  selector: 'app-kitchen-staff',
  templateUrl: './kitchen-staff.component.html',
  styleUrls: ['./kitchen-staff.component.css']
})
export class KitchenStaffComponent {
  username!: string;
  password!: string;

  constructor(private kitchenStaffService: KitchenStaffService,private http: HttpClient) {}

  // login(): void {
  //   this.kitchenStaffService.login(this.username, this.password);
  // }
  
  
  login() {
    // Perform login check with JSON server
    const url = 'http://localhost:3000/posts'; // Replace with your JSON server endpoint
    this.http.get(url).subscribe((response: any) => {
      if (Array.isArray(response)) {
        const foundUser = response.find(user => user.username === this.username && user.password === this.password);
        if (foundUser) {
          console.log('Login successful');
          // Redirect to the desired page or perform other actions
        } else {
          console.log('Invalid email or password');
          // Display an error message or perform other actions
        }
      } else {
        console.log('Invalid response from server');
        // Handle invalid response from server
      }
    }, error => {
      console.error('Error connecting to JSON server:', error);
      // Handle error scenario
    });
  }
}
