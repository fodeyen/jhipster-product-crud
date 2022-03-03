import { IProduct } from 'app/shared/model/product.model';

export interface IBrand {
  id?: number;
  brandId?: number;
  brandName?: string | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<IBrand> = {};
