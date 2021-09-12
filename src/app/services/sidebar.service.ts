import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Panel',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Lista de pacientes', url: '/' },
        { titulo: 'Nuevo paciente', url: 'paciente' },
        { titulo: 'Agendar cita', url: 'citas' },
        { titulo: 'Administrador', url: 'administrativo' },
        { titulo: 'Hospitales', url: 'hospitales' },
       // { titulo: 'Lista de roles', url: 'roles' },

      ]
    },
  ];

  constructor() { }
}
