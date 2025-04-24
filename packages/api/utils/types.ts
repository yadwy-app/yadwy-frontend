export interface Session {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export interface SearchOptions {
  pagination?: {
    offset: number;
    limit: number;
  };
}

export interface PaginatedResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
