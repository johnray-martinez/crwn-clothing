export type CartState = {
  cart: CartItem[], 
  isLoading: boolean
}

export type CartItem = {
  imageUrl: string, 
  id: number, 
  price: number, 
  quantity: number, 
  name: string
}