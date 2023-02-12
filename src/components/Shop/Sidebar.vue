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
        class="mb-2"
      >
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header class="pa-0" hide-actions>
              <div class="d-flex justify-space-between align-start">
                <div class="d-flex flex-column text-truncate">
                  <h5 class="subtitle-1 font-weight-regular text-truncate text-no-wrap">
                    Jin Ramen Mild Original Korean
                  </h5>
                  <h5 class="subtitle-2 font-weight-light">
                    10% discount
                  </h5>
                </div>
                <h5 class="subtitle-1 font-weight-regular">
                  2 x $ 70.00
                </h5>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                class="field-quantity"
                hide-details
                solo
              >
                <v-btn slot="prepend-inner" icon @click="test(0+index)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-btn slot="append" icon @click="test(1+index)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
  methods: {
    test (test) {
      console.log(test);
    },
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
