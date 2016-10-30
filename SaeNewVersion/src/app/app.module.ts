import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import {IdentificacaoPage} from '../pages/identificacao/identificacao';
import {PacientesPage} from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';
import {CadastroPaciente} from '../model/cadastroPaciente/cadastroPaciente';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    IdentificacaoPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    IdentificacaoPage

  ],
  providers: []
})
export class AppModule {}
