import useSWR from "swr";

export const fetcherGnews = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    const art = result.articles;
    return art.splice(0, 3);
  } catch (error) {
    throw error;
  }
};

export const fetcherNewsapi = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const useFetch = <T>(url: string, options?: {}) => {
  const { data, error } = useSWR<T>(url, fetcherNewsapi, options);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
