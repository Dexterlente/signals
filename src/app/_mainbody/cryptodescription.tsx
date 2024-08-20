import useSWR from "swr";
import { fetcher } from "../_components/ulits/fetcher";

export const CryptoDescription = ({ title }: any) => {
  const { data, error } = useSWR(
    `/api/cryptocurrencies/list/${title}`,
    fetcher
  );

  if (error) return <div>Failed to load description</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="ml-4 grid xl:grid-cols-2">
      {data.items.length > 0
        ? data.items.map((descItem: any, index: any) => (
            <div key={index} className="cursor-pointer hover:underline">
              {descItem.generate_tracker || "No "} Technical Analysis
            </div>
          ))
        : "No description available."}
    </div>
  );
};
