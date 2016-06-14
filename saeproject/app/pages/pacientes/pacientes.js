import {Page, NavController, Modal, MenuController} from 'ionic-angular';
import {DAOPacientes} from '../../dao/dao-paciente';
import {AddPacientePage} from '../add-paciente/add-paciente';
import {DadosPacientePage} from '../dados-paciente/dados-paciente';

@Page({
  templateUrl: 'build/pages/pacientes/pacientes.html',
})
export class PacientesPage {

  static get parameters() {
      return [[NavController], [MenuController]];
  }

  constructor(nav, menu) {
    this.menu = menu;
    this.enableMenu1();
    this.searchQuery = '';
    this.nav = nav;
    this.dao = new DAOPacientes();
    this.listaPacientes = this.dao.getList();
  }

  enableMenu1(){
    this.menu.enable(false, 'menu2');
    this.menu.enable(true, 'menu1');
  }

  teste(){
    console.log("cancelei");
  }

  novoPaciente(){
    let modal = Modal.create(AddPacientePage);
    this.nav.present(modal);

    modal.onDismiss((paciente) => {
      if(paciente){
        this.dao.insert(paciente);
        atualizar();
      }
    })
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

}
