import {NavController, Page} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

/*
  Generated class for the EsqueciSenhaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/esqueci-senha/esqueci-senha.html',
})
export class EsqueciSenhaPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  cancelar(){
    this.nav.setRoot(HomePage);
  }
}
