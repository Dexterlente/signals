"use client";
import { fetcher } from "@/app/_components/ulits/fetcher";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import AnalysisComponent from "./analysiscomponent";
import Loader from "@/app/loader";

const TechnicalPage = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(
    `/api/cryptocurrencies/details/${params.slug}`,
    fetcher
  );

  function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
  if (!data) return <Loader />;

  return (
    <div className="mx-6 2xl:mx-24">
      <div className="text-center text-2xl font-bold mt-10">
        Technical Analysis of {data?.title}
      </div>
      <div className="text-center text-sm mb-20">
        {formatDate(data?.created_at)}
      </div>
      <AnalysisComponent
        title={"1. Price Movement Analysis"}
        image={data?.pm_image_url}
        content={data?.pm}
      />
      <AnalysisComponent
        title={"2. Support and Resistance Levels"}
        image={data?.srl_image_url}
        content={data?.srl}
      />
      <AnalysisComponent
        title={"3. Moving Averages"}
        image={data?.ma_image_url}
        content={data?.ma}
      />
      <AnalysisComponent
        title={"4. Volume Analysis"}
        image={data?.va_image_url}
        content={data?.va}
      />
      <AnalysisComponent
        title={"5. Candlestick Patterns"}
        image={data?.cp_image_url}
        content={data?.cp}
      />
      <AnalysisComponent
        title={"6. Relative Strength Index"}
        image={data?.rsi_image_url}
        content={data?.rsi}
      />
    </div>
  );
};

export default TechnicalPage;
