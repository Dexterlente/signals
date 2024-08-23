import { useRouter } from "next/navigation";
import React from "react";

const Tabs = () => {
  const router = useRouter();
  const handleClick = () => {
    window.location.href = "https://thedailyblockchainph.com";
  };

  return (
    <div>
      <div>
        <div className="flex justify-center border-double border-b-4 border-[#000] bg-[#FFFFFF] py-3 text-[12px] space-x-16 relative">
          <div
            className="no-underline hover:underline hover:opacity-60"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            Mainsite
          </div>
          <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            Home
          </div>
          <div
            onClick={() => router.push("/about")}
            style={{ cursor: "pointer" }}
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
