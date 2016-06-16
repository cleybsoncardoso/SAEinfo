import {Page, NavController, Modal} from 'ionic-angular';
import {DAOPacientes} from '../../dao/dao-paciente';
import {HomePage} from '../../pages/home/home';
import {AddPacientePage} from '../../pages/add-paciente/add-paciente';

/*
  Generated class for the PacientesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/pacientes/pacientes.html',
})
export class PacientesPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.searchQuery = '';
    this.nav = nav;
    this.dao = new DAOPacientes();
    this.listaPacientes = this.dao.getList();
  }

  novoPaciente(){
    this.nav.setRoot(AddPacientePage);
  }

  openPaciente(paciente){
    let modal = Modal.create(DadosPacientePage, {parametro: paciente});
    //this.nav.present(modal);
    this.nav.push(DadosPacientePage, {parametro: paciente});
    //this.nav.setRoot(DadosPacientePage, {parametro: paciente});
    modal.onDismiss((paciente) => {
        this.dao.edit(paciente);
      })
  }

  atualizar(){
    var i;
    for (i = 0; i < this.listaPacientes.length; i++) {
      console.log(this.listaPacientes[i].nome);
    }
    this.listaPacientes = this.dao.getList();
  }

  getPacientes(searchbar){
    // Reset items back to all of the items
    this.listaPacientes = this.dao.getList();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.listaPacientes = this.listaPacientes.filter((paciente) => {
      if (paciente.nome.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  openPage(){
    console.log("cancelei");
    this.nav.setRoot(HomePage);
  }
}
