import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titulo:string = "";

  constructor(private router : Router) { }
  

  ngOnInit(): void {  
    
  }

  buscarProducto(valor:string){
    if(valor.length<1) return;
    this.router.navigateByUrl(`/search/${valor}`);
    
  }

}
