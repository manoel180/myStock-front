import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [ToolbarModule, AvatarModule, ButtonModule]
})
export class NavbarComponent {
  @ViewChild(SidebarComponent) sidebarRef!: SidebarComponent;

  constructor( public homeService: HomeService) { }


}
