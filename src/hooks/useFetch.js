import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { signal: abort.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setData(data);
        setError(null);
        setIsLoading(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };
    fetchData()
    return ()=> abort.abort()
  }, [url]);

  return {data,isLoading,error}
};
