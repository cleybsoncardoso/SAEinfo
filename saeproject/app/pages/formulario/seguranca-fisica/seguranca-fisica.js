import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the SegurancaFisicaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/seguranca-fisica/seguranca-fisica.html',
})
export class SegurancaFisicaPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
