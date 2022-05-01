import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.page.html',
  styleUrls: ['./romance.page.scss'],
})
export class RomancePage implements OnInit {

  public promance : Array<object> = []

  constructor(public navCtrl: NavController) {
    this.promance =[
  
      {
        "name": "365 DIAS",
        "categoria": "Romance",
         "img" :"assets/365d.jpg",
        "estrella" : "Calificación : "
    },
    {
      "name": "AFTER-ALMAS PERDIDAS",
      "categoria": "Romance",
       "img" :"assets/after.jpg",
        "estrella" : "Calificación : "
  },
  {
    "name": "A TRAVES DE MI VENTANA",
    "categoria": "Romance",
     "img" :"assets/atraves.jpg",
      "estrella" : "Calificación : "
},
    ]
  }

ngOnInit() {
  }

}
