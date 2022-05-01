import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {
  public paccion : Array<object> = []
  
  constructor(public navCtrl: NavController) {
    this.paccion =[
          {
            "name": "THE BATMAN",
            "categoria": "Acción",
             "img" :"assets/thebat.jpg",
            "estrella" : "Calificación : "
        },
        {
          "name": "RIESGO BAJO CERO",
          "categoria": "Acción",
           "img" :"assets/ries.jpg",
            "estrella" : "Calificación : "
      },
      {
        "name": "UNCHARTED-FUERA DEL MAPA",
        "categoria": "Acción",
         "img" :"assets/unchar.jpg",
          "estrella" : "Calificación : "
    },
        ]
      }
      ngOnInit() {
      }
    
    }


