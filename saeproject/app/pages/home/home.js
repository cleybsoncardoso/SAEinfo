import {Page, NavController} from 'ionic-angular';
import {PacientesPage} from '../../pages/pacientes/pacientes';
import {EsqueciSenhaPage} from '../../pages/esqueci-senha/esqueci-senha';
import {CadastroPaciente} from '../../model/paciente';




@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.paciente = new CadastroPaciente();
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
