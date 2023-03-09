<template>
  <div>
    <shop-product-grid
      v-if="isLayoutGrid"
      @click:item="addToCart($event)"
    ></shop-product-grid>
    <shop-product-row
      v-else
      @click:item="addToCart($event)"
    ></shop-product-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ShopProductGrid from '@/components/Shop/ShopProductGrid';
import ShopProductRow from '@/components/Shop/ShopProductRow';

export default {
  name: 'ShopProducts',
  components: {
    ShopProductGrid,
    ShopProductRow,
  },
  computed: {
    ...mapGetters({
      isLayoutGrid: 'shop/products/layout/grid',
    }),
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/value/items/add',
    }),
  },
};
</script>
