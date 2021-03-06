import {Page, NavController,Alert} from 'ionic-angular';
import {PacientesPage} from '../../pages/pacientes/pacientes';

/*
  Generated class for the AlterarSenhaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/alterar-senha/alterar-senha.html',
})
export class AlterarSenhaPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.senha1 = "";
    this.senha2 = "";
  }

  conferir(){

    if(this.senha1!=this.senha2){
      let alert = Alert.create({
        title: 'Não foi possivel alterar senha',
        subTitle: 'Senhas não correspondem',
        buttons: ['OK']
      });
      this.nav.present(alert);
    }else if(this.senha1==""||this.senha2==""){
      let alert = Alert.create({
        title: 'Não foi possivel alterar senha',
        subTitle: 'Coloque algum caracter no campo de nova senha',
        buttons: ['OK']
      });
      this.nav.present(alert);
    }else if(this.senha1==this.senha2){
      this.redirecionar();
    }

  }
  redirecionar(){
    this.nav.setRoot(PacientesPage);
  }
}
