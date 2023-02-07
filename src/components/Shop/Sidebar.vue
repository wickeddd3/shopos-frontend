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
        v-for="(n, index) in 4"
        :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>Jin Ramen Mild</v-list-item-title>

          <v-list-item-subtitle>10% discount</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-title>$ 70.00</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list dense class="py-4">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Subtotal</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-title>$ 140.00</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Discount</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-title>$ 5.00</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="body-1">Total</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-title class="body-1">$ 135.00</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>

      <div class="pa-2">
        <v-btn
          color="primary"
          block
        >
          Continue to Payment
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';

export default {
  name: 'ShopSidebar',
  mixins: [ Breakpoints ],
  computed: {
    ...mapGetters({
      show: 'shop/show',
    }),
  },
};
</script>

<style lang="scss" scoped>
.barcode.v-input {
  &.v-text-field.v-text-field--solo {
    & .v-input__control {
      min-height: 0px;
      background-color: red;
    }
  }
}
</style>
