import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {

  public pterror : Array<object> = []

 constructor(public navCtrl: NavController) {
  this.pterror=[
      {
        "name": "ESPIRAL-EL JUEGO DEL MIEO",
        "categoria": "Terror",
         "img" :"assets/juegmie.jpg",
        "estrella" : "Calificación : "
    },
    {
      "name": "MALIGNO",
      "categoria": "Terror",
       "img" :"assets/malig.jpg",
        "estrella" : "Calificación : "
  },
  {
    "name": "RUEGA POR NOSOTROS",
    "categoria": "Terror",
     "img" :"assets/rueg.jpg",
      "estrella" : "Calificación : "
},
    ]
  }
  ngOnInit() {
  }
}

