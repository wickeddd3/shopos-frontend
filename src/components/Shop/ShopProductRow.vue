<template>
  <v-list
    subheader
    two-line
  >
    <template v-for="item in productItems">
      <shop-product-row-item
        :key="item.id"
        :item="item"
        @click:item="$emit('click:item', item)"
      ></shop-product-row-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';
import ShopProductRowItem from '@/components/Shop/ShopProductRowItem';

export default {
  name: 'ShopProductRow',
  components: {
    ShopProductRowItem,
  },
  computed: {
    ...mapGetters({
      productReady: 'shop/products/list/ready',
      productItems: 'shop/products/list/value',
    }),
  },
};
</script>
