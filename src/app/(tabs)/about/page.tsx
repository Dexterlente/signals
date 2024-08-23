import React from "react";
import AboutPage from "./aboutPage";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgMainScreenAdhoc from "@/app/_adhoc/lgmainscreenadhoc";
import MdMainScreenAdhoc from "@/app/_adhoc/mdmainscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";

const page = () => {
  return (
    <>
      <FullScreenAdhoc>
        <AboutPage />
      </FullScreenAdhoc>
      <LgMainScreenAdhoc>
        <AboutPage />
      </LgMainScreenAdhoc>
      <MdMainScreenAdhoc>
        <AboutPage />
      </MdMainScreenAdhoc>
      <MobileScreenAdhoc>
        <AboutPage />
      </MobileScreenAdhoc>
    </>
  );
};

export default page;
