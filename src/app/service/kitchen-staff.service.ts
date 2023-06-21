import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitchenStaffService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): void {
    console.log('Login method called'); // Add this line

    const formData = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/posts', formData)
      .subscribe(
        response => {
          console.log('Form data sent successfully:', response);
          // You can perform further actions here, such as displaying a success message or navigating to a different page
        },
        error => {
          console.error('Error sending form data:', error);
          // Handle the error here, such as displaying an error message to the user
        }
      );
  }
}
