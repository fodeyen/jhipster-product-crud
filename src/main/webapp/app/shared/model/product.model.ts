import { IBrand } from 'app/shared/model/brand.model';
import { ICategory } from 'app/shared/model/category.model';

export interface IProduct {
  id?: number;
  productId?: number;
  productCode?: string;
  productName?: string | null;
  stockQuantity?: number | null;
  unitPrice?: number | null;
  brandId?: IBrand | null;
  categoryId?: ICategory | null;
}

export const defaultValue: Readonly<IProduct> = {};
