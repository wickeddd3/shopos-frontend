<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header class="pa-0" hide-actions>
        <div class="d-flex justify-space-between align-start">
          <div class="d-flex align-center">
            <v-btn
              class="mr-4"
              icon
              @click.stop="removeItem(item)"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <div class="d-flex flex-column text-truncate">
              <h5 class="subtitle-1 font-weight-regular text-truncate text-no-wrap">
                {{ item.name }}
              </h5>
              <h5 class="subtitle-2 font-weight-light">
                {{ `${discount(item.discount_percentage)} % discount` }}
              </h5>
            </div>
          </div>
          <h5 class="subtitle-1 font-weight-regular">
            {{ `${item.quantity} x $ ${(item.price || 0)}` }}
          </h5>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          :value="item.quantity"
          class="field-quantity"
          type="number"
          hide-details
          solo
          @keypress.prevent.e
          @input="inputQuantity({ value: $event, selected: item })"
        >
          <v-btn slot="prepend-inner" icon @click="deductQuantity(item)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn slot="append" icon @click="addQuantity(item)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ShopCartItem',
  props: {
    item: {
      tyle: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions({
      addQuantity: 'cart/value/items/item/quantity/add',
      deductQuantity: 'cart/value/items/item/quantity/deduct',
      inputQuantity: 'cart/value/items/item/quantity',
      removeItem: 'cart/value/items/remove',
    }),
    discount (discount) {
      if (discount) {
        return (parseFloat(discount) % 1) === 0 ? Math.round(discount) : discount;
      }
      return 0;
    },
  },
};
</script>
