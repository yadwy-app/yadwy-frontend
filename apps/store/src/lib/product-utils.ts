import type { Product } from "~/types";

export function getProductCoverImage(product: Pick<Product, "images">) {
  return product.images[0] || "/placeholder.svg";
}
