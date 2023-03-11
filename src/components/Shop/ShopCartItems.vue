<template>
  <div class="fill-height">
    <v-list
      v-if="cartItemsTotal > 0"
      dense
    >
      <v-list-item
        v-for="item in cartItems"
        :key="item.id"
        class="mb-2"
      >
        <shop-cart-item :item="item"></shop-cart-item>
      </v-list-item>
    </v-list>

    <v-layout
      v-else
      class="fill-height"
      column
      justify-center
      align-center
    >
      <v-icon
        size="100"
        class="grey--text text--lighten-3"
      >mdi-cart-off</v-icon>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ShopCartItem from '@/components/Shop/ShopCartItem';

export default {
  name: 'ShopCartItems',
  components: {
    ShopCartItem,
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/value/items',
      cartItemsTotal: 'cart/value/items/total',
    }),
  },
};
</script>
