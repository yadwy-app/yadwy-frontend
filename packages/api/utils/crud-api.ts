import type { Entity } from "@yadwy/types";
import type { AxiosInstance } from "axios";
import type { PaginatedResult, SearchOptions } from "./types";

export class CRUD_API<
  T = Entity,
  ByID_Data = T,
  CreationData = Exclude<T, keyof Entity>,
  UpdateData = CreationData,
> {
  constructor(
    public route: string,
    public http: AxiosInstance,
    public isFormData = false,
  ) {
    if (!route.startsWith("/"))
      throw new Error(`CRUD_API routes (${route}) should starts with '/'`);
    if (!route.endsWith("/"))
      throw new Error(`CRUD_API routes (${route}) should ends with '/'`);
  }

  create = async (product: CreationData) => {
    const fn = this.isFormData ? this.http.postForm : this.http.post;
    return await fn<T>(this.route, product).then((res) => res.data);
  };

  getById = async (id: string) => {
    return await this.http
      .get<ByID_Data>(`${this.route}${id}`)
      .then((res) => res.data);
  };

  list = async (_options?: SearchOptions) => {
    // TODO: send the search options to the backend
    return await this.http
      .get<PaginatedResult<T>>(this.route)
      .then((res) => res.data);
  };

  update = async ({ id, ...data }: Partial<UpdateData> & { id: string }) => {
    const fn = this.isFormData ? this.http.patchForm : this.http.patch;
    return await fn<T>(`${this.route}${id}/`, data).then((res) => res.data);
  };

  del = async ({ id }: { id: string }) => {
    return await this.http
      .delete(`${this.route}${id}/`)
      .then((res) => res.data);
  };
}
