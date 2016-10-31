
import {NavController, ModalController , MenuController} from 'ionic-angular';
//import {HomePage} from '../home/home';
import { Component } from '@angular/core';
import {IdentificacaoPage} from '../identificacao/identificacao';
import 'rxjs/add/operator/map';
//import {AddPacientePage} from '../../pages/add-paciente/add-paciente';
//import {IdentificacaoPage} from '../formulario/identificacao/identificacao';
import {CadastroPaciente} from '../../model/cadastroPaciente';
//import {PacienteAtualPage} from '../paciente-atual/paciente-atual';
import {PacienteService} from "../../providers/paciente-service/paciente-service";

@Component({
  templateUrl: 'pacientes.html',
  providers: [PacienteService]
})
export class PacientesPage {

  private searchQuery : string;
//  private dao:DAOPacientes;
  private listaPacientes : any;
  private paciente : CadastroPaciente;

  constructor(private nav: NavController, private menu:MenuController, public modalCtrl: ModalController, private service : PacienteService) {
    this.nav = nav;
    this.menu = menu;
    this.menu.enable(true);
    this.searchQuery = '';
//    this.dao = new DAOPacientes();
//    this.listaPacientes = this.dao.getList();
    this.carregarPacientes();
  }

  carregarPacientes(){
    this.service.carregar()
    .subscribe(data=>{
      this.listaPacientes = data;
      console.log(this.listaPacientes);
    },error => {
      console.log(this.listaPacientes);
      console.log("Não foi possível se conectar ao servidor");
    });
  }

  novoPaciente(){

    this.menu.enable(false);
    //this.nav.push(IdentificacaoPage);
    this.paciente = new CadastroPaciente();
    this.paciente.nome = "lucas";
    this.nav.push(IdentificacaoPage,{paciente: this.paciente} );
/*
    modal.onDismiss((paciente) => {
      if(paciente){
        this.dao.insert(paciente);
        this.atualizar();
      }
    })*/
  }
/*
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
  }*/
}
