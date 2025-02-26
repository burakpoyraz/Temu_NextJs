
"use client"
import { useRouter } from "next/navigation";
import React from "react";

const SalesCampaignBanner = () => {

    const router=useRouter();

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white">
          <div className="text-center flex gap-2">
            <span className="text-xl sm:text-2xl font-bold animate-bounce">
              🔥
            </span>
            <div className="text-sm text-white sm:text-base font-bold">
              Flash Sale Ends In :
            </div>
            <div className="text-sm text-white sm:text-base font-mono font-bold bg-white/20 p-1 px-2 rounded-md">
              23:59:59
            </div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <span className="text-xl font-bold ">⚡</span>
            <span className="font-bold text-yellow-200 ">UP TO 95% OFF!</span>
          </div>
          <button className="bg-white 
          text-red-600 
          font-bold 
          py-2 px-4 
          rounded-full 
          text-sm 
          hover:bg-yellow-100 
          transition-colors shadow-lg" onClick={()=>router.push('/')}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesCampaignBanner;
