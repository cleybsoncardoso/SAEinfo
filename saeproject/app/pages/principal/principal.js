import {NavController, Page} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';


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

  sair(){

    this.nav.setRoot(HomePage);
  }
}
