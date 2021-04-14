import { Component, OnInit } from '@angular/core';
import { TypeDocument } from 'src/app/model/type-document';
import { FireAuthService } from 'src/app/services/firebase/fireauth.service';
import { TypeDocuments} from 'src/app/constant/type-documents';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  typeDocuments: TypeDocument[];  
  formLogin: FormGroup;
  submitted: boolean;

  constructor(private authService: FireAuthService, private router: Router) { }

  ngOnInit(): void {
    this.typeDocuments = TypeDocuments;
    this.initForm();
  }

  initForm(): void{
    this.formLogin = new FormGroup({
      typeDocument: new FormControl('',[Validators.required]),
      documentNumber: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  signInWithGoogle(): void{
    this.authService.signInWithGoogle().then( () => {
      this.goToWelcome();
    });
  }

  login(){

    this.submitted = true;

    if (this.formLogin.invalid) return;

    this.goToWelcome();
  }

  signOut(): void{
    this.authService.signOut();
  }

  goToWelcome(){
    this.router.navigate(['/welcome']);
  }

  get f() { return this.formLogin.controls; }
}
