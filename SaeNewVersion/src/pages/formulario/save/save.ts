import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {PacientesPage} from '../../pacientes/pacientes';
import {DAOPacientes} from '../../../dao/dao-paciente';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
import {ObservacoesPage} from '../observacoes/observacoes';
import {CadastroPaciente} from "../../../model/cadastroPaciente";

@Component({
  templateUrl: 'build/pages/formulario/save/save.html'
})
export class SavePage {
  private paciente: CadastroPaciente;
  private dao:DAOPacientes;

  constructor(private params: NavParams, private nav: NavController) {
    this.paciente = params.get("parametro");
    this.dao = params.get("data");
    this.nav = nav;
  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.push(ObservacoesPage,{parametro: this.paciente});
    }
  }
  salvar(){
    this.dao.insert(this.paciente);
    this.nav.popToRoot();
  }

  salvar2(){

  }
}
