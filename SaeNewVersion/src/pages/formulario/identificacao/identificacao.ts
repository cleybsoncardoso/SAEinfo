import {NavController,  NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {PacientesPage} from '../../../pages/pacientes/pacientes';
import {EntrevistaPage} from '../entrevista/entrevista';
import {CadastroPaciente} from '../../../model/cadastroPaciente'

/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'identificacao.html',
})
export class IdentificacaoPage {

private paciente:CadastroPaciente;
//private dao:DAOPacientes;

  constructor(private params:NavParams,private nav:NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;

  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX<0){
      this.nav.push(EntrevistaPage,{parametro: this.paciente});
    }
  }
}
