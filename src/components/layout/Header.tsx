"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black py-2">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-white font-medium tracking-wide text-sm">
          🚀 &nbsp; Free shipping on orders over $15.00 X Free Retuns
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0); 

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current= window.scrollY;
    }
  };

  useEffect(() => {
    console.log("object");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full transform transition-transform duration-300 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <AnnouncementBar />
      </div>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
