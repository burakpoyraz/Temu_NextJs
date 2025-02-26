import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { searchProducts } from "@/sanity/lib/client";
import React from "react";

type SearchPageProps = {
  searchParams: { query?: string };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query="" } = searchParams;

  const products = await searchProducts(query);
  const hasProducts = products.length > 0;


  return (
    <div>
      <SalesCampaignBanner />
      <div className="bg-red-50 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-red-600 mb-2">
           Search Results for &quot;{query}&quot; - UP TO 90% OFF
          </h1>
          <p className="text-center text-red-500 text-sm md:text-base animate-pulse">
            ⚡ Flash Sale Ending Soon! | ⏳ Limited Time Only
          </p>
        </div>
      </div>
      <div className="bgyellow-50 p-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">⭐</span>
              <span>Top Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">💰</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto py-8">
        {hasProducts ? (
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-6">
              Showing {products.length} {products.length === 1 ? "product" : "products"} in search results for &quot;{query}&quot;
            </p>
            <ProductGrid products={products} />
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No products found</h2>
            <p className="text-gray-500">
              We couldn't find any products matching &quot;{query}&quot;. Try using different keywords or browse our categories.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;
