import {App, Platform, NavController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {PacientesPage} from './pages/pacientes/pacientes';
import {AlterarSenhaPage} from './pages/alterar-senha/alterar-senha';
import {AddPacientePage} from './pages/add-paciente/add-paciente';

@App({
  templateUrl: 'build/app.html',
  config: {},
  queries: {nav: new ViewChild('rootNavController') }
})
export class MyApp {

  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.login = LoginPage;
    this.pacientes = PacientesPage;
    this.alterarsenha = AlterarSenhaPage;
    this.addPaciente = AddPacientePage;
    this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(pagina){
    //this.rootPage = pagina;
    this.nav.setRoot(pagina);
  }

  sair(){
    this.nav.setRoot(LoginPage);
  }

}
