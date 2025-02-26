import { getAllCategories } from '@/sanity/lib/client';
import Link from 'next/link';

import React from 'react'

const HeaderCategorySelector = async () => {


    const categories=await getAllCategories();

    console.log(categories);


  return (
    <div className="relative inline-block group">
  <button className="peer text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1">
    Categories
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 transform rotate-0 group-hover:rotate-180 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>

  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 bg-white">
    <div className="w-64 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden">
      <div className="py-2 px-4">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/category/${category.slug?.current}`}
            className="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-100"
            prefetch
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default HeaderCategorySelector