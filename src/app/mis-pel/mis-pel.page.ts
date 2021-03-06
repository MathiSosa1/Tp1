import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-pel',
  templateUrl: './mis-pel.page.html',
  styleUrls: ['./mis-pel.page.scss'],
})
export class MisPelPage implements OnInit {
  public paccion : Array<object> = []
  public pterror : Array<object> = []
  public promance : Array<object> = []

  constructor(public navCtrl: NavController) {
this.paccion =[
      {
        "name": "THE BATMAN",
        "categoria": "Acción",
         "img" : "assets/thebat.jpg",
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
    this.pterror
   =[
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
     this.promance
     =[
         {
           "name": "365 DIAS",
           "categoria": "Romance",
            "img" :"assets/365d.jpg",
           "estrella" : "Calificación : ",
           "link": "https://www.youtube.com/watch?v=3N1jJqJ9Ziw"
       },
       {
         "name": "AFTER-ALMAS PERDIDAS",
         "categoria": "Romance",
          "img" :"assets/after.jpg",
           "estrella" : "Calificación : ",
           "link": "https://www.youtube.com/watch?v=speZejQwBQo"
     },
     {
       "name": "A TRAVES DE MI VENTANA",
       "categoria": "Romance",
        "img" :"assets/atraves.jpg",
         "estrella" : "Calificación : ",
         "link": "https://www.youtube.com/watch?v=ibjAgqsgQzc",
         "estrela": "star"
   },
       ]
      }
  
 
  ngOnInit() {
  }

}
