import SalesCampaignBanner from '@/components/layout/SalesCampaignBanner';
import { getProductById } from '@/sanity/lib/client';
import React from 'react'



type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetailPage = async ({params}:ProductDetailPageProps) => {

  const {id} = await params


  const product= await getProductById(id)

  console.log(product);

  return (
    <div className='bggray-50 '>
     
     <SalesCampaignBanner/>

  {/* Breadcrumb Detail */}
  


  {/* Product Sale Banner */}


  {/* Guarantee Items */}


  {/* Product Detail */}

    </div>
  )
}

export default ProductDetailPage