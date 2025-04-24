import type { AxiosInstance } from "axios";
import { getProductsAPIs } from "../services/products";

export function getAPI(http: AxiosInstance) {
  return {
    products: getProductsAPIs(http),
  };
}
