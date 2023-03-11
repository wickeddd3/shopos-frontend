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
      <shop-cart-barcode></shop-cart-barcode>
    </template>

    <shop-cart-items></shop-cart-items>

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
import ShopCartBarcode from '@/components/Shop/ShopCartBarcode';
import ShopCartItems from '@/components/Shop/ShopCartItems';
import ShopCartTotal from '@/components/Shop/ShopCartTotal';

export default {
  name: 'ShopCartSidebar',
  components: {
    ShopCartBarcode,
    ShopCartItems,
    ShopCartTotal,
  },
  mixins: [ Breakpoints ],
  computed: {
    ...mapGetters({
      show: 'shop/show',
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
