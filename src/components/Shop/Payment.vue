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
        <div class="d-flex justify-space-between align-center mb-2">
          <span class="body-1 font-weight-black">Order Summary</span>
          <v-btn
            color="primary"
            text
            @click="$emit('close')"
          >Return to Shop</v-btn>
        </div>
        <v-list class="py-0" outlined>
          <v-list-item
            v-for="item in cartItems"
            :key="item.id"
          >
            <v-list-item-avatar>{{ `${item.quantity} x` }}</v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ `${item.discountPercentage} % discount` }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>{{ item.price }}</v-list-item-action>
          </v-list-item>
        </v-list>
        <v-list color="grey lighten-4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Subtotal</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title>{{ `$ ${subtotal}` }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Discount</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title>{{ `$ ${totalDiscount}` }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6 font-weight-bold">Total</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-bold">
                {{ `$ ${total}` }}
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          <v-btn
            class="mt-8"
            color="error"
            block
            outlined
            tile
            @click="$emit('close')"
          >Void Transaction</v-btn>
        </v-list>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="0"
        width="100%"
        class="pa-8"
      >
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
            <cash-payment></cash-payment>
          </v-tab-item>
          <v-tab-item class="pt-4">
            Soon
          </v-tab-item>
          <v-tab-item class="pt-4">
            Soon
          </v-tab-item>
        </v-tabs-items>
      </v-sheet>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import CashPayment from '@/components/Shop/PaymentCash';

export default {
  name: 'Payment',
  components: {
    CashPayment,
  },
  data () {
    return {
      tab: null,
    };
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/value/items',
      subtotal: 'cart/value/subtotal',
      totalDiscount: 'cart/value/totalDiscount',
      total: 'cart/value/total',
    }),
  },
};
</script>
