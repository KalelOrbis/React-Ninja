import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortContrl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortContrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(error);
          }
        });
    }, 1000);
    return () => abortContrl.abort();
  }, [url]);

  return {
    data,
    error,
    isPending,
  };
}
