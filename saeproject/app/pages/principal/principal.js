import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the PrincipalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/principal/principal.html',
})
export class PrincipalPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
