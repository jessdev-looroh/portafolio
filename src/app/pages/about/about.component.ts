import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Equipo } from '../../interfaces/equipo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  equipo :Equipo[] =[];
  constructor(private objInfoPage : InfoPaginaService) { 
  objInfoPage.cargarEquipo().subscribe(equipo => {
      this.equipo = equipo;
  });
  }
  ngOnInit(): void {

    

  }

}
