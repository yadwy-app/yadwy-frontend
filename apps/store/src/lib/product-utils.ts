import type { Product } from "@yadwy/types";

export function getProductCoverImage(product: Pick<Product, "images">) {
  return product.images[0] || "/placeholder.svg";
}
