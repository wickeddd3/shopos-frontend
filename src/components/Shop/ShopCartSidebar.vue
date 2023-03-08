<template>
  <v-navigation-drawer
    :value="show"
    :permanent="isDesktop && show"
    :stateless="isMobile"
    width="25%"
    right
    app
  >
    <template v-slot:prepend>
      <v-list-item class="d-flex justify-space-between align-center py-2 px-4">
        <span class="font-weight-bold mr-8">CART</span>
        <v-text-field
          class="barcode"
          prepend-inner-icon="mdi-barcode-scan"
          hide-details
          solo
        ></v-text-field>
      </v-list-item>
    </template>

    <v-list dense class="py-4">
      <v-list-item
        v-for="item in cartItems"
        :key="item.id"
        class="mb-2"
      >
        <shop-cart-item :item="item"></shop-cart-item>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <shop-cart-total></shop-cart-total>

      <div class="pa-2">
        <v-btn
          :disabled="total < 1"
          color="primary"
          block
          @click="setPayment"
        >
          Continue Payment
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';
import ShopCartItem from '@/components/Shop/ShopCartItem';
import ShopCartTotal from '@/components/Shop/ShopCartTotal';

export default {
  name: 'ShopCartSidebar',
  components: {
    ShopCartItem,
    ShopCartTotal,
  },
  mixins: [ Breakpoints ],
  computed: {
    ...mapGetters({
      show: 'shop/show',
      cartItems: 'cart/value/items',
      total: 'cart/value/total',
    }),
  },
  methods: {
    ...mapActions({
      setPayment: 'cart/payment/set',
    }),
  },
};
</script>

<style lang="scss">
.barcode.v-input {
  &.v-text-field.v-text-field--solo {
    & .v-input__control {
      min-height: 0px;
    }
  }
}

.v-expansion-panel-content__wrap {
  padding: 0px;
}

.field-quantity input {
  text-align: center;
}
</style>
