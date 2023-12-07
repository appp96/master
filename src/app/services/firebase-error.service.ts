import { Injectable } from '@angular/core';
import { FirebaseErrorServiceEnum } from '../utils/firebase-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {

      //Correo ya existe
      case FirebaseErrorServiceEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

        //Contraseña debil
      case FirebaseErrorServiceEnum.WeakPassword:
        return 'La contraseña es muy débil';

        //Correo inválido
      case FirebaseErrorServiceEnum.InvalidEmail:
        return 'Correo inválido';

         //Contraseña incorrecta
      case FirebaseErrorServiceEnum.WrongPassword:
        return 'Contraseña incorrecta';

         //Usuario no válido
      case FirebaseErrorServiceEnum.UserNotFound:
        return 'El usuario no existe';

        //Error desconocido
      default:
        return 'Error desconocido';
    }
  }

}