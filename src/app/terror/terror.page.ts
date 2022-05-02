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
        "estrella" : "Calificación : ",
        "link": "https://www.youtube.com/watch?v=2bl7wCo-6bg"
    },
    {
      "name": "MALIGNO",
      "categoria": "Terror",
       "img" :"assets/malig.jpg",
        "estrella" : "Calificación : ",
        "link": "https://www.youtube.com/watch?v=0l_uo7zRnLs"
  },
  {
    "name": "RUEGA POR NOSOTROS",
    "categoria": "Terror",
     "img" :"assets/rueg.jpg",
      "estrella" : "Calificación : ",
      "link": "https://www.youtube.com/watch?v=6h37JM2cvsY"
},
    ]
  }
  ngOnInit() {
  }
}

