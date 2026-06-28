import type { FetchOptions } from "ofetch";

export function createApiClient(baseURL: string) {
  if (!baseURL) {
    throw new Error("API base is not set");
  }

  return $fetch.create({
    baseURL,
  });
}

export function useApiClient() {
  const config = useRuntimeConfig();
  return createApiClient(config.public.apiBase);
}

export type ApiClient = ReturnType<typeof createApiClient>;

export type ApiRequestOptions = FetchOptions;
