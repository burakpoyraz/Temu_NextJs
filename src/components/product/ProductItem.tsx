import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative">
      <div className="absolute top-2 right-2 z-10">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
          HOT!
        </span>
      </div>
      <div className="relative h-48 w-full">
        {product.image && (
          <Image
            src={urlFor(product.image).width(256).url() || ""}
            alt={product.title || "product image"}
            fill
            className="object-contain p-2"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 h-10 mb-1">
          {product.title}
        </h3>
        <div>
            <span className="text-lg font-bold text-red-500">
                ${(product.price||0).toFixed(2)} 
            </span>
            <span className="text-sm text-gray-400 line-through ml-2">
                {((product.price||0) * 5).toFixed(2)}
            </span>
        </div>
        <Link
        href={`/product/${product._id}`}
         className="block w-full text-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 mt-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
            GRAB IT NOW!
        </Link>
        <div className="text-xs text-red-500 text-center mt-1 animate-pulse">
        ⚡Limited time offer
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
