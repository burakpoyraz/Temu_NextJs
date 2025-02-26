import Form from "next/form";
import React from "react";

const HeaderSearchBar =  () => {

  return (
    <Form action="/search">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
            <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        
        </div>

        <input
          type="text"
          name="query"
          placeholder="Search products..."
          className="w-full sm:w-auto pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-transparent transition-colors duration-200"
        />
      </div>
    </Form>
  );
};

export default HeaderSearchBar;
