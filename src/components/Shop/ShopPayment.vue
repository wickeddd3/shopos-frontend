<template>
  <v-card
    color="grey lighten-4"
    flat
  >
    <div class="d-flex justify-content-between pa-8">
      <v-sheet
        color="grey lighten-4"
        elevation="0"
        width="50%"
        class="mr-8"
      >
        <shop-payment-order-details></shop-payment-order-details>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="0"
        width="100%"
        class="pa-8"
      >
        <shop-payment-options></shop-payment-options>
      </v-sheet>
    </div>
  </v-card>
</template>

<script>
import ShopPaymentOrderDetails from '@/components/Shop/ShopPaymentOrderDetails';
import ShopPaymentOptions from '@/components/Shop/ShopPaymentOptions';

export default {
  name: 'ShopPayment',
  components: {
    ShopPaymentOrderDetails,
    ShopPaymentOptions,
  },
};
</script>
