<<<<<<< HEAD
import {NavController, Page} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
=======
import {Component} from '@angular/core';
import {NavController,Page} from 'ionic-angular';
>>>>>>> cc9c2b337b51813001b85f3944f32d4e29cf98cd

@Page({
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
