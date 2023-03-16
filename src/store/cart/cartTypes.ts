export type CartState = {
  cart: Product[], 
  showDropdown: boolean
}

export type Product = {
  imageUrl: string, 
  id: number, 
  price: number, 
  quantity: number, 
  name: string
}