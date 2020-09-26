import { Component, Input, OnInit } from '@angular/core';
export interface Footer {
  email?: string;
  autor?: string;
  nombre?: string;
  in?: string;
  fb?: string;
  tw?: string;
  tu?: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  periodo: number = new Date().getFullYear();

  @Input() footer: Footer = {};
  constructor() {}

  ngOnInit(): void {}
}
