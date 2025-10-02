import { useEffect, useState } from "react";

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  initialValue: T,
  deps: any[] = [],
) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [fetchedData, setFetchedData] = useState<T>(initialValue);

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const data = await fetchFn();
      setFetchedData(data);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError({ message: error.message });
      } else {
        setError({ message: "Failed to fetch data." });
      }
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
    refetch: fetchData,
  };
}
