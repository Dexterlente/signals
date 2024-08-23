import React from "react";
import type { Metadata } from "next";
import AboutPage from "./aboutPage";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgMainScreenAdhoc from "@/app/_adhoc/lgmainscreenadhoc";
import MdMainScreenAdhoc from "@/app/_adhoc/mdmainscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";

export const metadata: Metadata = {
  title:
    "The Daily Signals, your trusted source for expert daily technical analysis of cryptocurrencies. As a leading component of The Daily Blockchain PH, we specialize in providing up-to-date, actionable insights into the cryptocurrency market to help you make informed trading decisions.",
  description: `The Daily Signals offers daily cryptocurrency analysis, delivering detailed technical evaluations and trading signals for a curated selection of digital assets. Our analysis covers key market trends, indicators, and trading opportunities, ensuring you stay ahead in the fast-paced world of cryptocurrency trading.
Our dedicated team of experienced analysts provides focused, reliable insights based on the latest market data. Whether you’re a trader, investor, or cryptocurrency enthusiast, The Daily Signals equips you with the knowledge needed to navigate the market effectively.
Stay informed with our real-time updates and alerts on cryptocurrency market changes. We also offer educational resources to enhance your understanding of technical analysis and trading strategies.
Join us at The Daily Signals and leverage our daily technical analysis to make well-informed trading decisions. Explore our website for the latest insights and connect with our community for ongoing support and updates.`,
};

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
