import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPage } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {}

  leerData():Observable<InfoPage>{
    return this.http.get<InfoPage>('assets/data/data-pagina.json');
  }
  
  cargarEquipo():Observable<Equipo[]>{
    return this.http.get<Equipo[]>("https://login-app-eaa02.firebaseio.com/equipo.json");
  }

}
