import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the HidratacaoEEliminacaoVesicalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/formulario/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical.html',
})
export class HidratacaoEEliminacaoVesicalPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
