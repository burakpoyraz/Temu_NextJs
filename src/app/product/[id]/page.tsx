import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import { formatPrice } from "@/lib/utils";
import { getProductById } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = await params;

  const product = await getProductById(id);

  const originalPrice = product.price !== undefined ? product.price : 0;

  const expensivePrice = originalPrice * 5;

  return (
    <div className="bg-gray-50">
      <SalesCampaignBanner />

      {/* Breadcrumb Detail */}

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-gray-600 hover:text-red-500 transition-colors flex items-center gap-1"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 truncate">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Sale Banner */}

      <div className="bg-gradient-to-r from-red-500/10 to-red-500/10  py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl  font-bold text-center mb-3 text-red-500">
            🔥FLASH SALE -80% OFF 🔥
          </h1>
          <div>
            <p className="text-center text-red-500 text-sm md:text-base font-semibold animate-pulse">
              ⚡Only {Math.floor(Math.random() * 10) + 1} items left at this
              price. Hurry up!⚡
            </p>
          </div>
        </div>
      </div>

      {/* Guarantee Items */}

      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/10 py-4 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">🚚</span>
              <span className="font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">🔄</span>
              <span className="font-medium">30 Days Return</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">🛡️</span>
              <span className="font-medium">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          {product.image && (
            <div className="bg-white p-5 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  fill
                  priority
                  src={
                    urlFor(product.image).url() ??
                    "/product-image-placeholder.svg"
                  }
                  alt={product.title ?? "Product Image"}
                  className="object-contain hover:scale-105 transform transition-transform duration-300"
                />
              </div>
            </div>
          )}

          {/* Product Information */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600">{product.description}</p>

            {/* Product Price */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-red-600">$</span>
                  <span className="text-3xl font-black text-red-600 tracking-tight">
                    {formatPrice(originalPrice).replace("$", "")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-lg line-through decoration-red-500/50 decoration-2">
                    {formatPrice(expensivePrice)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-0.5 rounded text-sm font-bold animate-pulse">
                      -80%
                    </span>
                    <span className="text-red-600 font-bold text-sm">
                      MEGA SAVINGS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-red-50 p2 rounded-lg">
              <span className="text-red-600 font-bold">💰</span>
              <span className="text-red-600 text-sm font-medium">
                You save {formatPrice(expensivePrice - originalPrice)}!
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-medium">
                {Math.floor(Math.random() * 50) + 20} people bought this product
                in the last hour
              </span>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 p-4 rounded-xl mt-4">
              <div className="flex items-center gap-2 text-yellow-800">
                <span className="text-xl">⚡</span>
                <span className="font-bold ">Limited Time Offer!</span>
              </div>
              <div className="text-yellow-700 text-sm font-medium">
                Order now before price changes!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
