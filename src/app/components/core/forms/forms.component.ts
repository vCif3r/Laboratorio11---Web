import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { IContacto } from '../../../models/contacto.model';
import { ContactosService } from '../../auth/services/contactos.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule, RouterLink, CommonModule
  ],
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {
  
  contactos: IContacto[] = [];

  newContacto: IContacto
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: ContactosService) {
    this.newContacto = {
      nombre: '',
      apellido: '',
      foto: '',
      telefono: ''
    };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      foto: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.contactos = this.authService.getContactos()
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {nombre, apellido, foto, telefono} = this.registerForm.value;
      this.newContacto.nombre = nombre;
      this.newContacto.apellido = apellido;
      this.newContacto.foto = foto;
      this.newContacto.telefono = telefono;
      this.authService.registerContacto(this.newContacto)
      console.log('contacto registrado: ',this.newContacto)
    }
  }
}
