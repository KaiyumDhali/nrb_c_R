import { useState, useEffect } from "react";

// T is the type of data you will fetch (SliderData, ClientData, etc.)
export function useFetch<T>(fetchFn: () => Promise<T[]>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFn();   // call the API function
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFn]);

  return { data, loading, error };
}
