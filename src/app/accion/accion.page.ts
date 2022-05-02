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
            "estrella" : "Calificación : ",
            "link": "https://www.youtube.com/watch?v=fWQrd6cwJ0A"
        },
        {
          "name": "RIESGO BAJO CERO",
          "categoria": "Acción",
           "img" :"assets/ries.jpg",
            "estrella" : "Calificación : ",
            "link": "https://www.youtube.com/results?search_query=riesgo+bajo+cero+trailer+español"
      },
      {
        "name": "UNCHARTED-FUERA DEL MAPA",
        "categoria": "Acción",
         "img" :"assets/unchar.jpg",
          "estrella" : "Calificación : ",
          "link": "https://www.youtube.com/watch?v=kVgsnqAp0Kk"
    },
        ]
      }
      ngOnInit() {
      }
    
    }


