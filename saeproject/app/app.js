import {Platform, ionicBootstrap, NavController} from 'ionic-angular';
import {ViewChild, Component} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {PacientesPage} from './pages/pacientes/pacientes';
import {AlterarSenhaPage} from './pages/alterar-senha/alterar-senha';
<<<<<<< HEAD
import {TabsPage} from './pages/tabs/tabs';
=======
import {AddPacientePage} from './pages/add-paciente/add-paciente';
>>>>>>> 903ba4b6bcf52369a59bdc61468bef88c22943d5

@Component({
  templateUrl: 'build/app.html',
  config: {},
  queries: {nav: new ViewChild('rootNavController')}
})
export class MyApp {

  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {

    this.rootPage = HomePage;
    this.pacientes = PacientesPage;
    this.alterarsenha = AlterarSenhaPage;
    this.addPaciente = AddPacientePage;
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
