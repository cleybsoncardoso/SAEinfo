import {NavController, Page} from 'ionic-angular';

/*
  Generated class for the HidratacaoEEliminacaoVesicalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical.html',
})
export class HidratacaoEEliminacaoVesicalPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(OxigenacaoPage);
    }else if(passar.deltaX<0){
      this.nav.setRoot(HidratacaoEEliminacaoVesicalPage);
    }
}

toggleGroup(id){
  let grupo = document.getElementById("dados"+id);
  this.toggleClose(id);
  if(grupo.style.visibility == "visible"){
    this.myIcons[id] = "md-add";
    grupo.style.height = "0px";
    grupo.style.visibility = "hidden";
  }else{
    grupo.style.visibility = "visible";
    grupo.style.height = "auto";
  }
}

toggleClose(id){
  var i=0;
  let grupo = document.getElementById("dados"+i);
  while(grupo!=null){
    if(i!=id){
      grupo.style.height = "0px";
      grupo.style.visibility = "hidden";
      this.myIcons[i] = "md-add";
    }else{
      this.myIcons[i] = "md-remove";
    }
    i++;
    grupo = document.getElementById("dados"+i);
  }
}
}
