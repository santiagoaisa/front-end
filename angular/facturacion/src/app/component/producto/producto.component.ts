import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Linea } from '../../model/Linea'
import { PRODUCTOS } from '../../seeder/seederProducto'
import { Producto } from 'src/app/model/producto';
import { isUndefined } from 'util';
import * as jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit, DoCheck {
  @Input() public linea: Linea;


  public listaProducto: Array<Producto>;

  constructor() {

  }


  ngDoCheck(): void {

    if (!isUndefined(this.linea)) {
     
      let idlinea=this.linea.idlinea;

      this.listaProducto = PRODUCTOS.filter(function (producto) {

        return producto.linea.idlinea == idlinea;

      });


    }


  }


  ngOnInit() {

  }

  public convert(){
    
    

    var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');
       
        /*
        doc.autoTable({
          head: [['Name', 'Email', 'Country']],
          body: [
              ['David', 'david@example.com', 'Sweden'],
              ['Castille', 'castille@example.com', 'Norway'],
              // ...
          ]
      });
      */

        // Save the PDF
        doc.save('Test.pdf');
  }

}
