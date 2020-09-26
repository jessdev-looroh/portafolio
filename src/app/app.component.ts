import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { Footer } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  titulo:string;
  footer: Footer = {};

    constructor(private infopage : InfoPaginaService) {
          infopage.leerData().subscribe(resp => {
            this.titulo = resp.titulo;
            this.footer.autor = resp.pagina_autor;
            this.footer.email = resp.email;
            this.footer.fb = resp.facebook;
            this.footer.in = resp.instagram;
            this.footer.tu = resp.tumblr;
            this.footer.tw = resp.twitter;
            this.footer.nombre = resp.nombre_corto;
          });          
    }


}
