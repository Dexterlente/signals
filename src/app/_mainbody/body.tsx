"use client";
import React from "react";
import FullScreenAdhoc from "../_adhoc/fullscreenadhoc";
import MainBody from "./mainbody";
import LgMainScreenAdhoc from "../_adhoc/lgmainscreenadhoc";
import MdMainScreenAdhoc from "../_adhoc/mdmainscreenadhoc";
import MobileScreenAdhoc from "../_adhoc/mobilescreenadhoc";

const Body = () => {
  return (
    <>
      <FullScreenAdhoc>
        <MainBody />
      </FullScreenAdhoc>
      <LgMainScreenAdhoc>
        <MainBody />
      </LgMainScreenAdhoc>
      <MdMainScreenAdhoc>
        <MainBody />
      </MdMainScreenAdhoc>
      <MobileScreenAdhoc>
        <MainBody />
      </MobileScreenAdhoc>
    </>
  );
};

export default Body;
