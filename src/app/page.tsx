import Image from "next/image";
import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import ProductGrid from "@/components/product/ProductGrid";

const Home = async () => {
  const { user } = await getCurrentSession();

  const products = await getAllProducts();


  return (
    <div>
      <SalesCampaignBanner/>
      <section className="container mx-auto py-8">
        
        <ProductGrid products={products}/>
        
      </section>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
