import { Component, OnInit, ViewChild } from "@angular/core";

import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HomeService } from '../../services/home.service';
import { RouterOutlet } from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [NavbarComponent, SidebarComponent, RouterOutlet]
})
export class HomeComponent implements OnInit {

  sidebarVisible: boolean = true;
  constructor(public homeService: HomeService) { }

  ngOnInit() {
  }

}
