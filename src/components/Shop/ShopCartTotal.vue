<template>
  <v-list dense class="py-4">
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
        <v-list-item-title class="body-1">Total</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-title class="body-1">{{ `$ ${total}` }}</v-list-item-title>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShopCartTotal',
  computed: {
    ...mapGetters({
      subtotal: 'cart/value/subtotal',
      totalDiscount: 'cart/value/total/discount',
      total: 'cart/value/total',
    }),
  },
};
</script>
