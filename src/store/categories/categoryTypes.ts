export type Category = {
  title: string,
  items: CategoryItem[]
}

export type CategoryItem = {
  id: number, 
  imageUrl: string,
  price: number, 
  name: string
}

export type CategoryState = {
  categoriesMap: Category[],
  isLoading: boolean,
  error?: string
}
