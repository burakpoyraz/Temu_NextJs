import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import {
  getCategoryBySlug,
  getProductsByCategorySlug,
} from "@/sanity/lib/client";
import React from "react";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategorySlug(slug),
  ]);

  console.log(category, products);

  return (
    <div>
      <SalesCampaignBanner />
      <div className="bg-red-50 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-red-600 mb-2">
            {category.title} - UP TO 90%
          </h1>
          <p className="text-center text-red-500 text-sm md:text-base animate-pulse">
            ⚡ Flash Sale Ending Soon!  |   ⏳ Limited Time Only 
          </p>
        </div>
      </div>
      <div></div>
      <section></section>
      CategoryPage {slug}
    </div>
  );
};

export default CategoryPage;
