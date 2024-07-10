import {
  Component,
  EventEmitter,
  Input,
  OnInit,
} from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { HomeService } from '../../services/home.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    PanelMenuModule, NgIf
  ],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];
  @Input() visible: boolean = false;
  constructor(public homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastros',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Categorias',
            icon: 'pi pi-eraser',
            route: '/installation',
          },
          {
            label: 'Produtos',
            icon: 'pi pi-heart',
            route: '/configuration',
          },
        ],
      },
    ];
  }
}
