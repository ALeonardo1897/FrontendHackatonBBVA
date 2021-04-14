import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private authFire: AngularFireAuth) { }

  async signInWithGoogle(){
    const auth = await this.authFire.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(auth);
  }

  async signOut(){
    await this.authFire.signOut();
  }
}
