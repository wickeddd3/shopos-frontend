<template>
  <v-app-bar
    app
    flat
    light
    height="64"
  >
    <v-btn
      icon
    >
      <v-icon>mdi-dots-grid</v-icon>
    </v-btn>

    <v-btn
      to="/"
      color="primary"
      text
      link
      exact
    >Back to Dashboard</v-btn>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="toggleShow()"
    >
      <v-icon v-text="cartIcon"></v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopAppbar',
  computed: {
    ...mapGetters({
      show: 'shop/show',
    }),
    cartIcon () {
      return this.show ? 'mdi-cart' : 'mdi-cart-outline';
    },
  },
  methods: {
    ...mapActions({
      toggleShow: 'shop/show/toggle',
    }),
  },
};
</script>
