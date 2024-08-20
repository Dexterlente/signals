import React from "react";
import TechnicalPage from "./technicalpage";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgMainScreenAdhoc from "@/app/_adhoc/lgmainscreenadhoc";
import MdMainScreenAdhoc from "@/app/_adhoc/mdmainscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <FullScreenAdhoc>
        <TechnicalPage params={params} />
      </FullScreenAdhoc>
      <LgMainScreenAdhoc>
        <TechnicalPage params={params} />
      </LgMainScreenAdhoc>
      <MdMainScreenAdhoc>
        <TechnicalPage params={params} />
      </MdMainScreenAdhoc>
      <MobileScreenAdhoc>
        <TechnicalPage params={params} />
      </MobileScreenAdhoc>
    </>
  );
};

export default Page;
