
import { Product } from '../cart/cartTypes';

export type Category = {
  title: string,
  items: Product[]
}


export type CategoryState = {
  categoriesMap: Category[],
  isLoading: boolean,
  error?: string
}
