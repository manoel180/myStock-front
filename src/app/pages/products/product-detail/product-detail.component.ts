import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Category } from '../../../core/model/category';
import { DropdownModule } from 'primeng/dropdown';
import { Product } from '../../../core/model/product';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true,
  imports:[FloatLabelModule,
    RouterModule, ReactiveFormsModule,
    InputTextModule, ButtonModule, 
    DropdownModule]
})
export class ProductDetailComponent implements OnInit {
  form!: FormGroup;
  categories: Category[] = [];
  public selectedId!: number;
  product: Product = new Product;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.createForm();
    this.updateForm();
  }
  loadCategories(){
    this.categoryService.listAll().subscribe({
      next: (res) =>{
        this.categories = res;
      }
    })
  }
  updateForm()
  {
    this.selectedId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getId(this.selectedId)
    .subscribe({
      next: (res: Product) => {
      this.product = res;
      if (this.product) {
        this.form.patchValue(this.product);
      } else {
          this.form.reset();
      }
    }});
    
  }

  saveProduct(){
   
    if(this.product.id){
      this.product = Object.assign(this.product, this.form.value)
      this.product.category_id = this.product.category.id;
      this.productService.edit(this.product, this.product.id)
      .subscribe({
        next: (res: Product) => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Produto salvo com sucesso!'});
          this.router.navigate(['products']);  
      },
      error: err => {
        this.messageService.add({severity: 'error',
          summary: 'Error', detail: err, life: 3000 });
      }});
    }else{
      this.form.controls['category_id'].setValue(this.form.controls['category'].value.id)
      this.productService.save(this.form.value)
      .subscribe({
        next: (res: Product) => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Produto salvo com sucesso!'});
          this.router.navigate(['products']);  
      },
      error: err => {
        this.messageService.add({severity: 'error',
          summary: 'Error', detail: err, life: 3000 });
      
  
      }});
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      quantity_alert: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      category_id: [''],

    });
  }
}
