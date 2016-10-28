import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import {PacientesPage} from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';
import {CadastroPaciente} from '../model/cadastroPaciente';
import {IdentificacaoPage} from '../pages/formulario/identificacao/identificacao';
import {EntrevistaPage} from '../pages/formulario/entrevista/entrevista';
import {SegurancaFisicaPage} from '../pages/formulario/seguranca-fisica/seguranca-fisica';
import {ObservacoesPage} from '../pages/formulario/observacoes/observacoes';
import {OxigenacaoPage} from '../pages/formulario/oxigenacao/oxigenacao';
import {HidratacaoEEliminacaoVesicalPage} from '../pages/formulario/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {AvaliacaoNeurologicaPage} from '../pages/formulario/avaliacao-neurologica/avaliacao-neurologica';
import {AvaliacaoCardiovascularPage} from '../pages/formulario/avaliacao-cardiovascular/avaliacao-cardiovascular';
import {AspectosCutaneoMucosaPage} from '../pages/formulario/aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import {AlimentacaoEEliminacaoIntestinalPage} from '../pages/formulario/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';

import {SavePage} from '../pages/formulario/save/save';



@NgModule({
  declarations: [
    MyApp,OxigenacaoPage,HidratacaoEEliminacaoVesicalPage,AvaliacaoNeurologicaPage,
    HelloIonicPage,AvaliacaoCardiovascularPage,AspectosCutaneoMucosaPage,
    ItemDetailsPage,AlimentacaoEEliminacaoIntestinalPage,
    ListPage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,SavePage,
    IdentificacaoPage,EntrevistaPage, ObservacoesPage,SegurancaFisicaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,OxigenacaoPage,HidratacaoEEliminacaoVesicalPage,AvaliacaoNeurologicaPage,
    HelloIonicPage,AvaliacaoCardiovascularPage,AspectosCutaneoMucosaPage,
    ItemDetailsPage,AlimentacaoEEliminacaoIntestinalPage,
    ListPage,SavePage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,
    IdentificacaoPage,EntrevistaPage, ObservacoesPage, SegurancaFisicaPage
  ],
  providers: []
})
export class AppModule {}
