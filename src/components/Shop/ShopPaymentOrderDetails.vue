<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <span class="body-1 font-weight-black">Order Summary</span>
      <v-btn
        color="primary"
        text
        @click="closeDialog"
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
        @click="closeDialog"
      >Void Transaction</v-btn>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopPaymentOrderDetails',
  computed: {
    ...mapGetters({
      cartItems: 'cart/value/items',
      subtotal: 'cart/value/subtotal',
      totalDiscount: 'cart/value/total/discount',
      total: 'cart/value/total',
    }),
  },
  methods: {
    ...mapActions({
      closeDialog: 'appdialog/close',
    }),
  },
};
</script>
