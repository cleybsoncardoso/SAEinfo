
import {Page, NavController, ModalController , MenuController} from 'ionic-angular';
import {DAOPacientes} from '../../dao/dao-paciente';
import {HomePage} from '../../pages/home/home';
//import {AddPacientePage} from '../../pages/add-paciente/add-paciente';
import {IdentificacaoPage} from '../formulario/identificacao/identificacao';
import {CadastroPaciente} from '../../model/cadastroPaciente';
import {PacienteAtualPage} from '../paciente-atual/paciente-atual';

@Page({
  templateUrl: 'build/pages/pacientes/pacientes.html',
})
export class PacientesPage {

  private searchQuery:string;
  private dao:DAOPacientes;
  private listaPacientes:Array<CadastroPaciente>;
  private pacienteCadastrado:CadastroPaciente;

  constructor(private nav: NavController, private menu:MenuController, public modalCtrl: ModalController) {
    this.nav = nav;
    this.menu = menu;
    this.menu.enable(true);
    this.searchQuery = '';
    this.dao = new DAOPacientes();
    this.listaPacientes = this.dao.getList();
    this.pacienteCadastrado=new CadastroPaciente();
  }

  novoPaciente(){
  //  let modal = Modal.create(TestePage);
    this.menu.enable(false);
    this.nav.push(IdentificacaoPage,{parametro: this.pacienteCadastrado, data:this.dao} );
/*
    modal.onDismiss((paciente) => {
      if(paciente){
        this.dao.insert(paciente);
        this.atualizar();
      }
    })*/
  }

  openPaciente(paciente){
    let modal = this.modalCtrl.create(PacienteAtualPage, {parametro: paciente});
    modal.present();
  }


  atualizar(){
    this.searchQuery = '';
    var i;
    for (i = 0; i < this.listaPacientes.length; i++) {
      console.log(this.listaPacientes[i].nome);
    }
    this.listaPacientes = this.dao.getList();
  }

  getPacientes(searchbar:any){
    // Reset items back to all of the items
    this.listaPacientes = this.dao.getList();

    // set q to the value of the searchbar
    let q = searchbar.target.value;

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
