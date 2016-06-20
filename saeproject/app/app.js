import {App, Platform, NavController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {PacientesPage} from './pages/pacientes/pacientes';
import {AlterarSenhaPage} from './pages/alterar-senha/alterar-senha';
<<<<<<< HEAD
import {AddPacientePage} from './pages/add-paciente/add-paciente';
=======
>>>>>>> 8c2fa836782fe46ffa249b51e7769511321a2361

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
<<<<<<< HEAD
    this.login = LoginPage;
    this.pacientes = PacientesPage;
    this.alterarsenha = AlterarSenhaPage;
    this.addPaciente = AddPacientePage;
    this.rootPage = LoginPage;
=======
    this.rootPage = HomePage;
    this.paciente = PacientesPage;
    this.home = HomePage;
    this.alterarsenha = AlterarSenhaPage;
>>>>>>> 8c2fa836782fe46ffa249b51e7769511321a2361
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
