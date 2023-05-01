import { Injectable } from '@angular/core';
import { LoginComponent } from '../componentes/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class MostrarLoginService {

  constructor() { }

  private modals: LoginComponent[] = [];

    add(modal: LoginComponent) {
        // verifica que el componente tiene un unico id
        if (!modal.id || this.modals.find(x => x.id === modal.id)) {
            throw new Error('el id del componente no es unico');
        }

        // agrega el componente a un array con popups activos
        this.modals.push(modal);
    }

    remove(modal: LoginComponent) {
        // elimina el componente del array con popups activos
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // abre el componente emergente segun el id
        const modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' no encontrado`);
        }

        modal.open();
    }

    close() {
        // close the modal that is currently open
        const modal = this.modals.find(x => x.isOpen);
        modal?.close();
    }

}
