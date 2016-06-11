<<<<<<< HEAD
import {Page, NavController} from 'ionic-angular';
import {PrincipalPage} from '../../pages/principal/principal';
=======
import {NavController,Page} from 'ionic-angular';
import {PrincipalPage} from './principal/principal';
>>>>>>> cc9c2b337b51813001b85f3944f32d4e29cf98cd

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  entrar(){
    this.nav.setRoot(PrincipalPage);
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
