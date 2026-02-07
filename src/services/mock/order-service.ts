import type { CheckoutFormData } from "~/schemas/checkout";
import type { CartItem } from "~/types/cart";

export interface OrderData {
  contact: CheckoutFormData["contact"];
  delivery: CheckoutFormData["delivery"];
  payment: CheckoutFormData["payment"];
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export interface OrderResult {
  orderId: string;
  status: "success" | "error";
  message?: string;
}

export interface Order extends OrderData {
  id: string;
  createdAt: Date;
}

function generateOrderId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `YDW-${timestamp}-${random}`.toUpperCase();
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function placeOrder(data: OrderData): Promise<OrderResult> {
  // Simulate network delay (200-500ms)
  const delayMs = Math.floor(Math.random() * 300) + 200;
  await delay(delayMs);

  // Generate order ID
  const orderId = generateOrderId();

  // Store order in localStorage for thank you page
  const order: Order = {
    ...data,
    id: orderId,
    createdAt: new Date(),
  };

  try {
    localStorage.setItem("yadwy-last-order", JSON.stringify(order));
  } catch {
    // localStorage might not be available
  }

  return {
    orderId,
    status: "success",
  };
}

export function getLastOrder(): Order | null {
  try {
    const orderJson = localStorage.getItem("yadwy-last-order");
    if (!orderJson) return null;
    return JSON.parse(orderJson) as Order;
  } catch {
    return null;
  }
}
