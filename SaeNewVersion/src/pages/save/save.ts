import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente}from '../../model/cadastroPaciente';
import {Observacoes} from '../observacoes/observacoes';

/*
  Generated class for the Save page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-save',
  templateUrl: 'save.html'
})
export class Save {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams, private nav: NavController) {
    this.paciente = params.get("parametro");
    //this.dao = params.get("data");
    this.nav = nav;
  }
  cancel(){
    this.nav.popToRoot();
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.push(Observacoes,{parametro: this.paciente});
    }
  }
  salvar(){
    this.nav.popToRoot();
  }

  salvar2(){
  this.nav.popToRoot();
  }

}
