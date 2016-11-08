import {Page, NavController} from 'ionic-angular';
import {PacientesPage} from '../../pages/pacientes/pacientes';
import {EsqueciSenhaPage} from '../../pages/esqueci-senha/esqueci-senha';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  constructor(private nav: NavController) {
    this.nav = nav;
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
