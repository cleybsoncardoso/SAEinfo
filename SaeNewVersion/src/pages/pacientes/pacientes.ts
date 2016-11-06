
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
  private listaPacientes : any;
  private listaPacientesAtualizada : any;
  private paciente : CadastroPaciente;

  constructor(private nav: NavController, private menu:MenuController, public modalCtrl: ModalController, private service : PacienteService) {
    this.nav = nav;
    this.menu = menu;
    this.menu.enable(true);
    this.searchQuery = '';
    this.carregarPacientes();
  }


  carregarPacientes(){
    this.service.carregar()
    .subscribe(data=>{
      this.listaPacientes = data;
      this.listaPacientesAtualizada = data;
      console.log(this.listaPacientes);
    },error => {
      console.log(this.listaPacientes);
      console.log("Não foi possível se conectar ao servidor");
    });
    this.searchQuery = '';
  }

  pesquisarPacientes(){
    this.listaPacientes = this.listaPacientesAtualizada;
  }

  novoPaciente(){

    this.menu.enable(false);
    this.paciente = new CadastroPaciente();
    this.nav.push(IdentificacaoPage,{paciente: this.paciente} );

  }

  getPacientes(searchbar:any){
    // Reset items back to all of the items
    this.pesquisarPacientes();

    // set q to the value of the searchbar
    let val = searchbar.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listaPacientes = this.listaPacientes.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
