import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  token: string = '';
  constructor(private authService: AuthService) { }

  // onLogin() {
  //   this.authService.getToken().subscribe(
  //     () => console.log('Token retrieved and stored successfully!'),
  //     error => console.error('Error fetching token:', error)
  //   );
  // }

}

