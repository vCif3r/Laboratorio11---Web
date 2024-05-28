import { Injectable } from '@angular/core';
import { IContacto } from '../../../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  registerContacto(contacto: IContacto){

    const contactosRegistradosString = localStorage.getItem('contactos');
    let contactosRegistrados: IContacto[] = [];

    // Si hay usuarios almacenados, los parsea de vuelta a un array
    if (contactosRegistradosString) {
      contactosRegistrados = JSON.parse(contactosRegistradosString);
    }

    // Agrega el nuevo usuario al array
    contactosRegistrados.push(contacto);

    // Guarda el array actualizado en el almacenamiento local
    localStorage.setItem('contactos', JSON.stringify(contactosRegistrados));
 
  }

  getContactos(): IContacto[] {
    // Obtener la cadena que representa los contactos almacenados en el local storage
    const contactosRegistradosString = localStorage.getItem('contactos');
    
    // Si hay contactos almacenados, parsearlos de vuelta a un array de objetos de tipo IContacto
    if (contactosRegistradosString) {
      return JSON.parse(contactosRegistradosString);
    } else {
      return []; // Si no hay contactos almacenados, devolver un array vacío
    }
  }
}
