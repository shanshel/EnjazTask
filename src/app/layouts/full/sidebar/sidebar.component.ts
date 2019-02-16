import { Contries } from './../../../shared/countries';
import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  cities2: City[] = Contries;
  selectedCity2: City;


  constructor() { }

  ngOnInit() {
  }

  




}
