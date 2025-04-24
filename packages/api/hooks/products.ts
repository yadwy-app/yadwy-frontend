import { clientAPI } from "~/services/api.client";
import { createCRUDHooks } from "~/utils/crud-hooks";

export const productsHooks = createCRUDHooks("products", clientAPI.products);
