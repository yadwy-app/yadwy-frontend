/**
 * Cart-related type definitions for the checkout flow
 */

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartSummary {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
}

export interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;

  // Actions
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;

  // Computed (as functions for Zustand)
  getSubtotal: () => number;
  getItemCount: () => number;
}
