import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

import { ActivatedRoute} from '@angular/router';
import { Prod } from '../../interfaces/prod';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  producto: Prod = {};
  isCargando = true;
  id:string;

  constructor(
    private productService: ProductosService,
    private routeA: ActivatedRoute
  ) {
    routeA.params.subscribe((data) => {
      this.id=data['id'];
      productService.cargarProductoXID(data['id']).subscribe((prod) => {
        this.producto = prod;
        this.isCargando = false;

      });
    });
    //
  }

  ngOnInit(): void {}
}
