import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isCargando = true;
  productosFitlrados : Productos[]= [];
  termino : string;
  constructor(private route: ActivatedRoute,private proServ: ProductosService) { 

    
  }

  ngOnInit(): void {
    this.route.params.subscribe(para=>{
      this.proServ.buscarProducto(para['search']).subscribe(prodFilter => {
            this.productosFitlrados = prodFilter;
            this.isCargando = false;
            this.termino = para['search'];
      });       
    });
  }

}
