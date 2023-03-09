const shopProductsLayout = localStorage.getItem('shop.products.layout') ?? 'grid';

export default {
  show: true,
  products: {
    layout: shopProductsLayout,
  },
};
