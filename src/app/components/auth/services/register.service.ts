import { Injectable } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { IContacto } from '../../../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  register(usuario: IUsuario){
    //localStorage.setItem('usuario', JSON.stringify(usuario));
    //return localStorage.getItem('usuario') || null


    const usuariosRegistradosString = localStorage.getItem('usuarios');
    let usuariosRegistrados: IUsuario[] = [];

    // Si hay usuarios almacenados, los parsea de vuelta a un array
    if (usuariosRegistradosString) {
      usuariosRegistrados = JSON.parse(usuariosRegistradosString);
    }

    // Agrega el nuevo usuario al array
    usuariosRegistrados.push(usuario);

    // Guarda el array actualizado en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
 
  }

  
}
