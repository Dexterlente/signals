import React from "react";
import Image from "next/image";
import HtmlContent from "@/app/_components/ulits/htmlcontent";

interface Props {
  title: string;
  image: string;
  content: string;
}

const AnalysisComponent = ({ title, image, content }: Props) => {
  return (
    <div className="mb-10">
      <div className="font-bold text-2xl mb-3">{title}</div>
      <div className="flex justify-center mb-4">
        <Image src={image} width={700} height={700} alt="chart" />
      </div>
      {/* <div>{content}</div> */}
      <HtmlContent html={content} />
    </div>
  );
};

export default AnalysisComponent;
