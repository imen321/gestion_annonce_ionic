import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }
  onSubmit() {
    
    if (this.username === 'admin' && this.password === 'password') {
      
      this.router.navigate(['/home']);
    } else {
      
      console.log('Identifiants incorrects');
    }
  }

  onForgotPassword() {
  
    this.router.navigate(['/reset-password']);
  }
  onSignUp() {
    
    this.router.navigate(['/signup']);
  
}


  ngOnInit() {
  }

}
