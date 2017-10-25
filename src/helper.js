export const formatProductList = (products) => {
  return products.map(value => {
    return {
      id: value.id,
      name: value.collection_name,
      price: value.selling_price,
      category: value.category.name,
      slug: `/product/${value.slug}`,
      image: `https://rfx-sg-assets.imgix.net/${(value.media.find(value => value.is_primary === true) && value.media.find(value => value.is_primary === true).path) || value.media[0].path}?auto=format,compress?q=80&fit=clip&w=254&h=350`
    }
  })
}

export const formatProductDetail = (product) => {
  return {
    id: product.id,
    name: product.collection_name,
    price: product.selling_price,
    brand: product.brand.name,
    category: product.category.name,
    size: product.size.name,
    color: product.color.name,
    images: product.media.map(value => ({
      id: value.id,
      name: value.name,
      path: `https://rfx-sg-assets.imgix.net/${value.path}`
    }))
  }
}