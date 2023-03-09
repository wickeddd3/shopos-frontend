<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      hide-slider
    >
      <v-tab>
        <v-icon left>mdi-cash</v-icon>
        Cash
      </v-tab>
      <v-tab>
        <v-icon left>mdi-alpha-g-circle-outline</v-icon>
        GCash
      </v-tab>
      <v-tab>
        <v-icon left>mdi-credit-card-outline</v-icon>
        Credit Card
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="pt-4">
        <shop-payment-cash></shop-payment-cash>
      </v-tab-item>
      <v-tab-item class="pt-4">
        Soon
      </v-tab-item>
      <v-tab-item class="pt-4">
        Soon
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ShopPaymentCash from '@/components/Shop/ShopPaymentCash';

export default {
  name: 'ShopPaymentOptions',
  components: {
    ShopPaymentCash,
  },
  data () {
    return {
      tab: null,
    };
  },
};
</script>
