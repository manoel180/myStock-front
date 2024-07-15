import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historySale',
  standalone: true,
  imports: [DataViewModule, CardModule, CommonModule],
  templateUrl: './historySale.component.html',
  styleUrls: ['./historySale.component.css']
})
export class HistorySaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
