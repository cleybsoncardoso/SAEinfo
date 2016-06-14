import {Page, NavController, NavParams, MenuController} from 'ionic-angular';
import {PacientesPage} from '../pacientes/pacientes';


@Page({
  templateUrl: 'build/pages/dados-paciente/dados-paciente.html',
})
export class DadosPacientePage {
  static get parameters() {
    return [[NavParams], [NavController], [MenuController]];
  }

  constructor(params, nav, menu) {
    this.nav = nav;
    this.menu = menu;
    this.enableMenu2();
    this.paciente = params.get("parametro");
    console.log(this.paciente.nome);
  }

  enableMenu2() {
    this.menu.enable(true, 'menu2');
    this.menu.enable(false, 'menu1');
  }

  cancel(){
    console.log("pop");
    this.nav.pop();
  }
}
