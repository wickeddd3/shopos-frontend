<template>
  <v-row>
    <v-col
      v-for="item in productItems"
      :key="item.id"
      cols="2"
    >
      <shop-product-grid-item
        :item="item"
        @click:item="$emit('click:item', item)"
      ></shop-product-grid-item>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import ShopProductGridItem from '@/components/Shop/ShopProductGridItem';

export default {
  name: 'ShopProductGrid',
  components: {
    ShopProductGridItem,
  },
  computed: {
    ...mapGetters({
      productReady: 'products/list/ready',
      productLoading: 'products/list/loading',
      productItems: 'products/list/value/items',
    }),
  },
};
</script>
