export type CartState = {
  cart: CartItem[], 
  showDropdown: boolean
}

export type CartItem = {
  imageUrl: string, 
  id: number, 
  price: number, 
  quantity: number, 
  name: string
}