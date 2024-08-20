import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useSWR from "swr";
import { fetcher } from "../_components/ulits/fetcher";

const MainBody = () => {
  const { data } = useSWR(`/api/cryptocurrencies`, fetcher);

  if (!data) return <div>Loading...</div>;
  const sortedData = [...data].sort();

  return (
    <div className="mx-2 mt-5">
      <Accordion type="single" collapsible>
        {sortedData.map((item: any, index: any) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item}</AccordionTrigger>
            <AccordionContent>
              {item.description || "No description available."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MainBody;
