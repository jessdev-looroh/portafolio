import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';
import { Prod } from '../interfaces/prod';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // productosFiltrados: Productos[]=[];
  constructor(private http : HttpClient) { }

  cargarProductos():Observable<Productos[]>{
    return this.http.get<Productos[]>("https://login-app-eaa02.firebaseio.com/products_idx.json");
  }

  cargarProductoXID(cod:String):Observable<Prod>{
    return this.http.get<Prod>(`https://login-app-eaa02.firebaseio.com/products/${cod}.json`);
  }

  
  buscarProducto(termino:string){
    return this.cargarProductos().pipe(map(data=>{
      let productos: Productos[]=[];
      productos = data.filter(prod=>{
        if(prod.titulo.toLowerCase().match(termino.toLowerCase())) return true;       
        else if(prod.categoria.toLocaleLowerCase().match(termino.toLocaleLowerCase()))  return true;
        return false;
      });
      return productos;
    }));
    // return this.productos.filter(producto=> {
    //   return true;
    // } );
  }
}
