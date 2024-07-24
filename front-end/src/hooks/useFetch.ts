import {useEffect, useState} from "react";

type FetcherFunction<TResponse> = (url: string) => Promise<TResponse>;

export function useFetch<TResponse>(url: string, fetcher: FetcherFunction<TResponse>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TResponse>()

  useEffect(() => {
    setIsLoading(() => true);
    fetcher(url).then((response) => {
      setData(() => response)
      setIsLoading(() => false)
    })
  }, [url]);

  return { isLoading, data }
}