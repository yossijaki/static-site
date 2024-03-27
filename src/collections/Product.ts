import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'name',
        type: 'text',
    },
    {
        name: 'description',
        type: 'richText',
    },
    {
        name: 'price',
        type: 'number'
    },
    {
        name: 'quantity',
        type: 'number'
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media'
    }
  ],
}

export default Products
