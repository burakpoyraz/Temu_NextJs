"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { User } from "@prisma/client";

import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import HeaderSearchBar from "./HeaderSearchBar";

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

type HeaderProps = {
  user: Omit<User, "passwordHash"> | null;
  categorySelector : React.ReactNode;
};

const Header = ({ user, categorySelector }: HeaderProps) => {
const router = useRouter();

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
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

        <div className="w-full flex justify-between items-center py-3 sm:py-4 bgwhite/80 shadow-sm border-b border-gray-100 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between px-8">
            <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
              <IoMdMenu className="text-gray-700 hover:text-gray-900 cursor-pointer md:hidden" />

              <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                
                {categorySelector}
                <Link href="#">Sale</Link>
              </nav>
            </div>
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                DEAL
              </span>
            </Link>

            <div className="flex flex-1 justify-end items-center text-sm gap-2 sm:gap-4">
              <HeaderSearchBar/>

              {user ? (
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-gray-700 text-sm">{user.email}</span>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium"
                    onClick={async (e) => {
                      e.preventDefault();
                      await logoutUser();
                      router.refresh();
                    }}
                  >
                    Sign Out
                  </Link>
                </div>
              ) : (
                <React.Fragment>
                  <Link  className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium" href="/auth/sign-in">Sign İn</Link>
                  <Link  className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium" href="/auth/sign-up">Sign Up</Link>
                </React.Fragment>
              )}

              <div className="relative inline-block">
                {/* Sepet İkonu */}
                <HiOutlineShoppingBag className="text-gray-700 hover:text-gray-900 text-2xl cursor-pointer" />

                {/* Sayıyı Gösteren Badge */}

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
