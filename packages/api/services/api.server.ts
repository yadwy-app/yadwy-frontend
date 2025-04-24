import "server-only";

import { http } from "~/utils/axios.server";
import { getAPI } from "./api";

export const serverAPI = getAPI(http);
