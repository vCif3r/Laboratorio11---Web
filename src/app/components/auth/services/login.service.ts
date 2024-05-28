import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  
  login(username: string, password: string){
    // Obtiene el valor del local storage y verifica si es null
    const usuariosRegistradosString = localStorage.getItem('usuarios');
    const usuariosRegistrados: any[] = usuariosRegistradosString !== null ? JSON.parse(usuariosRegistradosString) : [];

    // Busca un usuario que coincida con el nombre de usuario y la contraseña proporcionados
    const usuario = usuariosRegistrados.find(user => user.username === username && user.password === password);

    // Si se encuentra un usuario, el inicio de sesión es exitoso
    
    if(usuario){
      return console.log('login exitoso: ',usuario);
    }
    
  }
}
