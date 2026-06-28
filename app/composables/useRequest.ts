import { getFetchErrorMessage } from "@/utils/api";

export interface UseRequestOptions<T> {
  requestFn: (signal: AbortSignal) => Promise<T>;
  defaultErrorMessage?: string;
  onSuccess?: (data: T) => void;
  onError?: (message: string, error: unknown) => void;
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}

export function useRequest<T>(options: UseRequestOptions<T>) {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  let abortController: AbortController | null = null;

  async function execute(): Promise<T | undefined> {
    abortController?.abort();
    abortController = new AbortController();
    const { signal } = abortController;

    loading.value = true;
    error.value = null;

    try {
      const result = await options.requestFn(signal);

      if (signal.aborted) {
        return undefined;
      }

      data.value = result;
      options.onSuccess?.(result);
      return result;
    } catch (err) {
      if (signal.aborted || isAbortError(err)) {
        return undefined;
      }

      const message = getFetchErrorMessage(
        err,
        options.defaultErrorMessage ?? "خطای ناشناخته در دریافت اطلاعات",
      );
      error.value = message;
      options.onError?.(message, err);
    } finally {
      if (!signal.aborted) {
        loading.value = false;
      }
    }
  }

  function reset() {
    abortController?.abort();
    abortController = null;
    loading.value = false;
    error.value = null;
    data.value = null;
  }

  onScopeDispose(() => {
    abortController?.abort();
  });

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
}
