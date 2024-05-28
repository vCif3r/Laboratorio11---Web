import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IUsuario } from '../../../models/usuario.model';
import { RegisterService } from '../services/register.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule, RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUsuario: IUsuario
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: RegisterService) {
    this.newUsuario = {
      email: '',
      username: '',
      phone: '',
      password: ''
    };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {email, username, phone, password} = this.registerForm.value;
      this.newUsuario.email = email;
      this.newUsuario.username = username;
      this.newUsuario.phone = phone;
      this.newUsuario.password = password;
      this.authService.register(this.newUsuario)
      console.log('Usuario registrado: ',this.newUsuario)
    }
  }
}
