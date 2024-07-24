import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

import { HomeService } from '../../services/home.service';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MediaMatcher} from '@angular/cdk/layout';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { MENU_ITEMS } from "../../components/sidebar/pages-menu";
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from "primeng/toast";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MenuModule,
      AvatarModule, ToastModule
     ],
     providers: [MessageService]
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  constructor(public homeService: HomeService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener  (this._mobileQueryListener);
   }

  ngOnInit() {
    this.items = MENU_ITEMS;
  }
}
