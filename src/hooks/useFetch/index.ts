import { createContext, useEffect, useState } from "react";

interface GetDataContextProps {
  data: AtivaProductProps[];
  isLoading: boolean;
  fetchData: () => void;
}

export const GetDataContext = createContext<GetDataContextProps>(
  {} as GetDataContextProps
);

export const useFetch = (url: string) => {
  const [data, setData] = useState([] as AtivaProductProps[]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(
            url,
            {
              method: "GET",
            }
          );
          const data = await resp.json();
          console.log(data);
          setData(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

  return {
    data,
    isLoading
  };
};
