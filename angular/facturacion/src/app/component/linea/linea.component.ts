import { Component, OnInit } from '@angular/core';
import { Linea } from '../../model/Linea'
import { LINEAS } from '../../seeder/seederLinea'


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})

export class LineaComponent implements OnInit {

  public lineaSeleccionada: Linea;
  public listaLinea:Array<Linea>;

  constructor() {
    this.listaLinea=LINEAS;
  }

  ngOnInit() {
  }

  seleccionar(linea:Linea):void{
    this.lineaSeleccionada=linea;
  }

}
