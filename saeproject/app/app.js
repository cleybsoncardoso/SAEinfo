import {App, Platform, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {PacientesPage} from './pages/pacientes/pacientes';
import {AlterarSenhaPage} from './pages/alterar-senha/alterar-senha';
import {AddPacientePage} from './pages/add-paciente/add-paciente';
import {DadosPacientePage} from './pages/dados-paciente/dados-paciente';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.home = HomePage;
    this.pacientes = PacientesPage;
    this.alterarsenha = AlterarSenhaPage;
    this.addPaciente = AddPacientePage;
    this.rootPage = HomePage;
    this.mycontent = DadosPacientePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(pagina){
    this.rootPage= pagina;
  }

  sair(){
    this.rootPage = HomePage;
  }


}
