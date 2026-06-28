import type { FetchError } from "ofetch";
import type { FetchErrorData } from "@/types/api";

export function getFetchErrorMessage(
  error: unknown,
  fallback = "خطای ناشناخته در دریافت اطلاعات",
): string {
  if (error instanceof Error && "data" in error) {
    const fetchError = error as FetchError<FetchErrorData>;
    return (
      fetchError.data?.message ??
      fetchError.statusMessage ??
      fetchError.message ??
      fallback
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}
