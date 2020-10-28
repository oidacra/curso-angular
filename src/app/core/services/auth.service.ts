import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Observable, from } from 'rxjs';
import * as _ from 'underscore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = this.afAuth.authState;
  constructor(private readonly afAuth: AngularFireAuth) {}
  createUserWithGoogle(): Observable<auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return from(
      this.afAuth
        .signInWithPopup(provider)
        .then((userCredentials: auth.UserCredential) => {
          console.log(userCredentials);
          return userCredentials;
        })
        .catch((err) => {
          throw new Error(this.__handleError(err));
        })
    );
  }
  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  private __handleError(error: firebase.auth.Error) {
    console.log(error);
    const errorMsgs: firebase.auth.Error[] = [
      { code: 'auth/invalid-email', message: 'Correo inválido' },
      { code: 'auth/user-disabled', message: 'Cuenta deshabilitada' },
      { code: 'auth/weak-password', message: 'La contraseña es muy débil' },
      {
        code: 'auth/email-already-in-use',
        message: 'Ya esta registrado con este correo',
      },
    ];
    const msgDescription = _.find(errorMsgs, (msg: firebase.auth.Error) => {
      return msg.code === error.code;
    });

    return !_.isUndefined(msgDescription)
      ? msgDescription?.message
      : 'Error desconocido';
  }
}
