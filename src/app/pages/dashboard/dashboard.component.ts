import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SalesByCategoryComponent } from "./salesByCategory/salesByCategory.component";
import { HistorySaleComponent } from "./historySale/historySale.component";
import { CardModule } from 'primeng/card';
import { TopproductsComponent } from "./topproducts/topproducts.component";
import { SocketDashboardService } from '../../services/socketDashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, SalesByCategoryComponent, CardModule, HistorySaleComponent, TopproductsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public data: any[] = [];

  constructor(private socketDashboardService: SocketDashboardService) {

  }

  ngOnInit(): void {
    this.socketDashboardService.connect();

  }
  sendMessage(message: string) {
    this.socketDashboardService.sendMessage(message);
  }

  ngOnDestroy() {
    this.socketDashboardService.close();
  }
}
