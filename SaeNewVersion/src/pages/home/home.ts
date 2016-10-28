import {NavController} from 'ionic-angular';
import {PacientesPage} from '../pacientes/pacientes';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private nav: NavController) {
  }

  entrar(){
    this.nav.setRoot(PacientesPage);
  }

  esqueci(){
    this.nav.setRoot(EsqueciSenhaPage);
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
  }
