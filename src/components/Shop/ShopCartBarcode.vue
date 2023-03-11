<template>
  <v-list-item class="d-flex justify-space-between align-center py-2 px-4">
    <span class="font-weight-bold mr-8" @click="clear">CART</span>
    <v-text-field
      ref="barcode"
      v-model="barcode"
      class="barcode"
      prepend-inner-icon="mdi-barcode-scan"
      hide-details
      solo
    ></v-text-field>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex';
import { debounce } from 'lodash';

export default {
  name: 'ShopCartBarcode',
  data () {
    return {
      barcode: null,
    };
  },
  watch: {
    barcode: debounce(function (value) {
      if (value && value.length >= 10) {
        this.addItem(value);
      }
    }, 200),
  },
  methods: {
    ...mapActions({
      addBarcode: 'cart/value/items/add/barcode',
    }),
    clear () {
      this.barcode = null;
      this.$refs.barcode.focus();
    },
    addItem (value) {
      if (this.addBarcode(value)) {
        this.clear();
      }
    },
  },
};
</script>
