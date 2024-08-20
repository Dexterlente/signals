import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useSWR from "swr";
import { fetcher } from "../_components/ulits/fetcher";
import Loader from "../loader";
import { CryptoDescription } from "./cryptodescription";

const MainBody = () => {
  const { data } = useSWR(`/api/cryptocurrencies`, fetcher);

  if (!data) return <Loader />;
  const sortedData = [...data].sort();

  return (
    <div className="mx-2 mt-5 my-10">
      <Accordion type="single" collapsible>
        {sortedData.map((item: any, index: any) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item}</AccordionTrigger>
            <AccordionContent>
              <CryptoDescription title={item} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MainBody;
