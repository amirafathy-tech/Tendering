import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BTP-SD-APP';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.loggedInUser.subscribe(loggedInUser => {
      this.isLoggedIn = !!loggedInUser;
    });
  }
  ngOnInit() {
    // Set token globally when the app loads
    // const hardcodedToken = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZGV2c3RhZ2UuYXV0aGVudGljYXRpb24uZXUxMC5oYW5hLm9uZGVtYW5kLmNvbS90b2tlbl9rZXlzIiwia2lkIjoiZGVmYXVsdC1qd3Qta2V5LWFhMDA2MDAxYWUiLCJ0eXAiOiJKV1QiLCJqaWQiOiAicW1QTUl5REtZbUlXZWZiaWNsekFveW5MRmUrRFF1OEU3RjRSWWVLTjl6Zz0ifQ.eyJqdGkiOiIyNDlhZTE0MTY5Yzg0ZjRjYTA1YTRjNjZiMTVkM2NhNyIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJmZGQxMmNiNi05NzgyLTQyMzUtOTgyYy1jNzBlZjc1YjNhNzUiLCJ6ZG4iOiJkZXZzdGFnZSJ9LCJzdWIiOiJzYi1zZC1hcHAhdDUyNzU0OCIsImF1dGhvcml0aWVzIjpbInVhYS5yZXNvdXJjZSJdLCJzY29wZSI6WyJ1YWEucmVzb3VyY2UiXSwiY2xpZW50X2lkIjoic2Itc2QtYXBwIXQ1Mjc1NDgiLCJjaWQiOiJzYi1zZC1hcHAhdDUyNzU0OCIsImF6cCI6InNiLXNkLWFwcCF0NTI3NTQ4IiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIxYTNiNTU1YyIsImlhdCI6MTczOTE4MjU1MCwiZXhwIjoxNzM5MjI1NzUwLCJpc3MiOiJodHRwczovL2RldnN0YWdlLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vb2F1dGgvdG9rZW4iLCJ6aWQiOiJmZGQxMmNiNi05NzgyLTQyMzUtOTgyYy1jNzBlZjc1YjNhNzUiLCJhdWQiOlsidWFhIiwic2Itc2QtYXBwIXQ1Mjc1NDgiXX0.HhXYBv8F950vUd7wO-rsm_jiwDAKs8RjCB9-jZY8EPZeRqVYKHs3gHXe2KW5HNuaqLIans6-zqOZdy1jT6RfBdq_tLv-IQT1wYtzFrDfNRhvdQELFrVFrXn7X52YismkaYcZ6kp_ilBsYMc7X2J6on-EGFBf-DrkvH4yPNbRIT2X_M91A3G-C8rUBlTrZIzaCOuyb0rw0z2uDUZAWxV0yhv0LFcrErPi3vdhA50u4FNm4OFXfZBCR4wLIAc4sq8gMoYoKnnFInaaoUS9Ot9arwEiLfGxMGev5Omw9AsAQfkEi0mRTZ1xCl5p1rTr22zm3p8JF0dDqLCVSf0hlV9CEA"; // Replace with your actual token
    // localStorage.setItem('token', hardcodedToken);
   // this.authService.setToken(hardcodedToken);
  }

}
