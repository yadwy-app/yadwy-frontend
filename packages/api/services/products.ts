import type { AxiosInstance } from "axios";
import { CRUD_API } from "~/utils/crud-api";

export function getProductsAPIs(http: AxiosInstance) {
  return new CRUD_API("/products/", http, true);
}
