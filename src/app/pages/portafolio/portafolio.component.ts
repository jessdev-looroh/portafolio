import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  isCargando = false;
  productos: Productos[] = [];
  

  constructor(private objProductos: ProductosService,private pruducServ : ProductosService) { }

  ngOnInit(): void {
    this.isCargando = true;
    this.objProductos.cargarProductos().subscribe((data) => {
      this.productos = data
      this.isCargando=false;
    });

  }
 
}
