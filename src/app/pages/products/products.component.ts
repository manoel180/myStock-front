import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../../core/model/product';
import { ProductService } from '../../services/product.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon'
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Router, RouterLink } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ExchangeService } from '../../services/exchange.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports:[TableModule, IconFieldModule,ConfirmDialogModule,
    ToastModule, RouterLink,
    TagModule,
    InputIconModule, InputTextModule, ButtonModule, ConfirmPopupModule, CommonModule],
  providers: [ConfirmationService, MessageService]
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  quoteDolar: number =0;

  constructor(private productService: ProductService,
    private exchangeService: ExchangeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }
  getQuote(){
    this.exchangeService.getQuote()
    .subscribe(
      {
        next: (res) => {
          this.quoteDolar = res.value[0].cotacaoCompra;
        }});
  }
  calculateQuote(value: number){
    return value / this.quoteDolar ;

  }
  getStatus(quantity: number, quantity_alert: number){
    switch (this.getSeverity(quantity, quantity_alert)) {
      case 'success':
          return 'Disponivel';
      case 'warning':
          return 'Estoque critico';
      case 'danger':
          return 'Abaixo do limite';
  }
  }
  getSeverity(quantity: number, quantity_alert: number) {

    if(quantity <=quantity_alert){
      return 'danger';
    }else if(quantity-5<=quantity_alert){
      return 'warning';
    }    
    return 'success';
  }
  ngOnInit() {
    this.getQuote();
this.load();
  }
  load(){
    this.productService.listAll()
    .subscribe({
      next: (res: Product[]) => {
      this.products = res;
    },
    error: err => {
      console.log(err);

    }});
  }
 
  editProduct(product: Product) {
    this.router.navigate(['product',{id: product.id}]);
}

deleteProduct(product: Product) {


  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.productService.delete(product.id).subscribe(
            {
              next: res => {
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Produto excluido com sucesso!'});
                this.products =[];
                this.load();

              },
              error: err => {

                this.messageService.add({severity: 'error',
                  summary: 'Error', detail: err, life: 3000 });
              }
            }
          );

      }
  });
}
}
