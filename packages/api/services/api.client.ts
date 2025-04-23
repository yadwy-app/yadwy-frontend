import "client-only";

import { http } from "~/utils/axios.client";
import { getAPI } from "./api";

export const clientAPI = getAPI(http);
