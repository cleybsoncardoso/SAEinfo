import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the PacientesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pacientes/pacientes.html',
})
export class PacientesPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
