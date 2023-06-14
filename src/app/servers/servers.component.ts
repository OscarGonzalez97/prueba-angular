import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  formData = {
    name: '',
    email: ''
  };

  titulos: string[] = ['Server1', 'server2', 'sernver4', 'serverN'];

  serverName = '';

  ngOnInit(){

  }

  onUpdateserverName(event: any){
    this.serverName = event.target.value;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Realizar acciones cuando el formulario es válido
      console.log('Formulario válido');
    } else {
      // Mostrar mensajes de error o realizar acciones adicionales
      console.log('Formulario inválido');
    }
  }
}
