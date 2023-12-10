import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: UntypedFormGroup;
  loading: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService) { 
      this.recuperarUsuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      })
    }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.email;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      this.toastr.info('Te enviamos un correo para restablecer la contraseña', 'Recuperar Password')
      this.router.navigate(['/login']);
    }).catch((error)=>{
      this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error')
    })
  }
}
