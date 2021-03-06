import {Page, NavController, AlertController} from 'ionic-angular';
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

  private senha1: string;
  private senha2: string;

  constructor(private nav: NavController, private alertController: AlertController) {
    this.nav = nav;
    this.senha1 = "";
    this.senha2 = "";
  }

  conferir(){
    if(this.senha1!=this.senha2){
      let alert = this.alertController.create({
        title: 'Não foi possivel alterar senha',
        subTitle: 'Senhas não correspondem',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.senha1==""||this.senha2==""){
      let alert = this.alertController.create({
        title: 'Não foi possivel alterar senha',
        subTitle: 'Coloque algum caracter no campo de nova senha',
        buttons: ['OK']
      });
      alert.present(alert);
    }else if(this.senha1==this.senha2){
      this.redirecionar();
    }

  }
  redirecionar(){
    this.nav.setRoot(PacientesPage);
  }
}
