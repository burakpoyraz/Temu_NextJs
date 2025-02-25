import Image from "next/image";
import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";

const Home = async () => {
  const { user } = await getCurrentSession();

  return (
    <div>
      <SalesCampaignBanner/>
      <section className="container mx-auto py-8">
        ProductGrid
        
      </section>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
