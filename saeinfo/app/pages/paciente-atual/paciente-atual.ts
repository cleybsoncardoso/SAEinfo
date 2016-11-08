import { Component } from '@angular/core';
import { NavController, Page, NavParams } from 'ionic-angular';
import {PacientesPage} from '../pacientes/pacientes';
import {CadastroPaciente} from '../../model/cadastroPaciente'

/*
  Generated class for the PacienteAtualPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/paciente-atual/paciente-atual.html',
})
export class PacienteAtualPage {

private paciente:CadastroPaciente;

  constructor(private params:NavParams,private nav:NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;


}
}
