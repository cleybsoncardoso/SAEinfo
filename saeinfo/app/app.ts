import {Platform, ionicBootstrap, NavController} from 'ionic-angular';
import {ViewChild, Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {PacientesPage} from './pages/pacientes/pacientes';
import {AlterarSenhaPage} from './pages/alterar-senha/alterar-senha';
import {AddPacientePage} from './pages/add-paciente/add-paciente';


@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {

  @ViewChild('rootNavController') nav: NavController;

  static get parameters() {
    return [[Platform]];
  }

  private rootPage: HomePage;
  private paciente = PacientesPage;
  private alterarsenha = AlterarSenhaPage;
  private homePage = HomePage;

  constructor(platform: Platform) {

    this.rootPage = HomePage;
    this.pacientes = PacientesPage;
    this.alterarsenha = AlterarSenhaPage;
    this.homePage = HomePage;
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
    this.nav.setRoot(HomePage);
  }

}

ionicBootstrap(MyApp);
