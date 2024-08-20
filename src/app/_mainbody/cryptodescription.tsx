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
    <div className="cursor-pointer hover:underline">
      {data.items.length > 0
        ? data.items.map((descItem: any, index: any) => (
            <div key={index}>
              {descItem.generate_tracker || "No description available."}
            </div>
          ))
        : "No description available."}
    </div>
  );
};
