import { IProduct } from 'app/shared/model/product.model';

export interface ICategory {
  id?: number;
  categoryId?: number;
  categoryName?: string | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<ICategory> = {};
