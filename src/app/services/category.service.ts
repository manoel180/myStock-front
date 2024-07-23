import { Injectable } from '@angular/core';
import { Category } from '../core/model/category';
import { ICategoryService } from './ICategoryService';
import { CRUDService } from './CRUD.service';
import { ConfigAPI } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CRUDService<Category> implements ICategoryService{
  override url: string = ConfigAPI.CATEGORY;
  constructor(http: HttpClient) {
    super(http );
  }

}
