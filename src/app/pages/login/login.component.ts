import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/firebase/fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: FireAuthService) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void{
    this.authService.signInWithGoogle();
  }

  signOut(): void{
    this.authService.signOut();
  }

}
