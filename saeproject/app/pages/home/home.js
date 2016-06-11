import {Page, NavController} from 'ionic-angular';
import {PrincipalPage} from '../../pages/principal/principal';
import {EsqueciSenhaPage} from '../../pages/esqueci-senha/esqueci-senha';



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
  esqueci(){
    this.nav.setRoot(EsqueciSenhaPage);
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
