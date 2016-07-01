import {Page, NavController, Modal, MenuController} from 'ionic-angular';
import {DAOPacientes} from '../../dao/dao-paciente';
import {HomePage} from '../../pages/home/home';
//import {AddPacientePage} from '../../pages/add-paciente/add-paciente';
import {IdentificacaoPage} from '../../pages/identificacao/identificacao';

@Page({
  templateUrl: 'build/pages/pacientes/pacientes.html',
})
export class PacientesPage {
  static get parameters() {
    return [[NavController], [MenuController]];
  }

  constructor(nav, menu) {
    this.nav = nav;
    this.menu = menu;
    this.searchQuery = '';
    this.dao = new DAOPacientes();
    this.listaPacientes = this.dao.getList();
  }

  novoPaciente(){
  //  let modal = Modal.create(TestePage);
    this.nav.setRoot(IdentificacaoPage);
/*
    modal.onDismiss((paciente) => {
      if(paciente){
        this.dao.insert(paciente);
        this.atualizar();
      }
    })*/
  }
  /**
  openPaciente(paciente){
    this.nav.push(DadosPacientePage, {parametro: paciente});
  }
  */

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
}
