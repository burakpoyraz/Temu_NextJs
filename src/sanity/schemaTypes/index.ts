import { type SchemaTypeDefinition } from 'sanity'
import { promotionCampaign } from './shemas/promotion-campaign'
import { promotionCode } from './shemas/promotion-codes'
import { product } from './shemas/product'
import { productCategory } from './shemas/product-category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    productCategory,
    promotionCampaign,
    promotionCode,
  ],
}
