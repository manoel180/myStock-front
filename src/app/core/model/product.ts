import { Category } from "./category"

export class Product {
  constructor() {

  }
  id!: number;
  name!: string;
  description!: string;
  quantity!: number;
  quantity_alert!: number;
  price!: number;
  category_id!: number;
  category!: Category;
}
